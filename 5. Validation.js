const validationRules = {
  text: /^[a-zA-Z\s]{5,}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
  mobile: /^\d{10}$/,
  gender: /^(male|female|other)$/i,
  name: /^[a-zA-Z\s]{5,}$/,
};

// Function to validate input based on its type and value
function validateInput(inputType, inputValue) {
  if (!inputValue.trim()) {
    return false;
  }

  if (validationRules[inputType]) {
    return validationRules[inputType].test(inputValue);
  }

  return true; // Default to true if no specific validation rule is found
}

const inputs = [
  { type: "text", value: "JohnDoe" }, // Should return True(less than 5 letters)
  { type: "text", value: "Jo" }, // Should return false (less than 5 letters)
  { type: "email", value: "john.doe@example.com" }, // Valid email
  { type: "email", value: "john.doe" }, // InValid email
  { type: "password", value: "Password123" }, // Valid password
  { type: "password", value: "Passwor" }, // InValid password
  { type: "mobile", value: "1234567890" }, // Valid mobile number
  { type: "mobile", value: "1234567890123" }, //In Valid mobile number
  { type: "gender", value: "Male" }, // Valid gender
  { type: "gender", value: "Mal" }, // InValid gender
  { type: "name", value: "John Doe" }, // Valid name
  { type: "name", value: "Joh" }, // InValid name
];

inputs.forEach((input) => {
  console.log(`${input.type}: ${validateInput(input.type, input.value)}`);
});
