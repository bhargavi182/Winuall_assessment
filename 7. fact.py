def factorial(n):
    # Base case: if n is 0 or 1, return 1
    if n == 0 or n == 1:
        return 1
    # Recursive case: return n * factorial(n - 1)
    return n * factorial(n - 1)

number = 5
print(f"The factorial of {number} is {factorial(number)}")
