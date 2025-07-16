"use strict";

// Step 01: Create Functions for Addition, Subtraction, Multiplication, and Division
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => {
  if (num2 == 0) {
    return "Cannot divide by zero";
  } else {
    return num1 / num2;
  }
};
// Step 02: Create a Validation Function for Inputs
const validateInputs = (num1, num2) => {
  if (
    typeof num1 == "number" &&
    isNaN(num1) == 0 &&
    typeof num2 == "number" &&
    isNaN(num2) == 0
  ) {
    return true;
  } else {
    return false;
  }
};
// Step 03: Create a Calculator Function to Combine the Above Functions
const calculator = (num1, num2, operation) => {
  if (!validateInputs(num1, num2)) {
    return "Both inputs must be numbers";
  }
  if (operation == "add") {
    return add(num1, num2);
  } else if (operation == "subtract") {
    return subtract(num1, num2);
  } else if (operation == "multiply") {
    return multiply(num1, num2);
  } else if (operation == "divide") {
    return divide(num1, num2);
  }
  return `Invalid operation. Please use "add", "subtract", "multiply", or "divide".`;
};

// console.log(add(10, 5));
// console.log(subtract(10, 5));
// console.log(multiply(10, 5));
// console.log(divide(10, 5));
// console.log(divide(10, 0));
// console.log(validateInputs(10, "10"));
// console.log(calculator(10, 90, "multiply"));
