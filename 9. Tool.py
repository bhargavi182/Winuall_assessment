import csv
import requests
from bs4 import BeautifulSoup

# Function to scrape quotes and authors from the website
def scrape_quotes(url):
    # Send a GET request to the URL
    response = requests.get(url)
    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(response.text, 'html.parser')
    # Find all quote elements
    quote_elements = soup.find_all('div', class_='quote')
    
    # Extract quotes and authors from each element and store them in a list of dictionaries
    scraped_data = []
    for element in quote_elements:
        quote = {
            'text': element.find('span', class_='text').text,
            'author': element.find('small', class_='author').text
        }
        scraped_data.append(quote)
    
    return scraped_data

# Function to save scraped data to a CSV file
def save_to_csv(data, filename):
    with open(filename, 'w', newline='', encoding='utf-8') as csvfile:
        fieldnames = ['text', 'author']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        for row in data:
            writer.writerow(row)

# URL of the website to scrape
url = 'https://quotes.toscrape.com/'

# Scrape quotes and authors from the website
scraped_data = scrape_quotes(url)

# Save scraped data to a CSV file
save_to_csv(scraped_data, 'scraped_quotes.csv')
