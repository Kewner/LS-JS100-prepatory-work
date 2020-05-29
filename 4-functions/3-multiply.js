// Write a program that uses a multiply method to multiply two numbers and
// returns the result. Ask the user to enter the two numbers, then output the
// numbers and result as a simple equation.

// Multiply function
function multiply(a, b) {
  return a * b;
}

// Function that takes in prompt, asks for input en returns input
function getNumber(prompt) {
  let rlSync = require('readline-sync');
  return parseFloat(rlSync.question(prompt));
}

let firstNum = getNumber('Enter the first number: ');
let secondNum = getNumber('Enter the second number: ');
let multiplied = multiply(firstNum, secondNum);

// Log complete greeting
console.log(`${firstNum} * ${secondNum} = ${multiplied}`);