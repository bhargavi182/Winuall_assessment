from flask import Flask, jsonify, request, abort

app = Flask(__name__)

# Dummy data for books
books = [
    {"id": 1, "title": "The Great Gatsby", "author": "F. Scott Fitzgerald"},
    {"id": 2, "title": "1984", "author": "George Orwell"},
    {"id": 3, "title": "To Kill a Mockingbird", "author": "Harper Lee"}
]

# Function to find a book by ID
def find_book(book_id):
    return next((book for book in books if book['id'] == book_id), None)

# Route to get all books
@app.route('/books', methods=['GET'])
def get_books():
    return jsonify(books)

# Route to get a specific book by ID
@app.route('/books/<int:book_id>', methods=['GET'])
def get_book(book_id):
    book = find_book(book_id)
    if book:
        return jsonify(book)
    else:
        abort(404, description="Book not found")

# Route to create a new book
@app.route('/books', methods=['POST'])
def create_book():
    if not request.json or 'title' not in request.json or 'author' not in request.json:
        abort(400, description="Title and author are required")
    new_book = {
        "id": books[-1]['id'] + 1 if books else 1,
        "title": request.json['title'],
        "author": request.json['author']
    }
    books.append(new_book)
    return jsonify(new_book), 201

# Route to update a book
@app.route('/books/<int:book_id>', methods=['PUT'])
def update_book(book_id):
    book = find_book(book_id)
    if not book:
        abort(404, description="Book not found")
    if not request.json:
        abort(400, description="Request body is missing")
    book['title'] = request.json.get('title', book['title'])
    book['author'] = request.json.get('author', book['author'])
    return jsonify(book)

# Route to delete a book
@app.route('/books/<int:book_id>', methods=['DELETE'])
def delete_book(book_id):
    global books
    book = find_book(book_id)
    if not book:
        abort(404, description="Book not found")
    books = [b for b in books if b['id'] != book_id]
    return '', 204

if __name__ == '__main__':
    app.run(debug=True)
