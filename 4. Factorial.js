function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  // Return n multiplied by factorial of (n-1)
  return n * factorial(n - 1);
}

const number = 5;
console.log("Factorial of", number, "is", factorial(number)); // Output: Factorial of 5 is 120
