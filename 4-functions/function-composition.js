// A function call can be used as an rgument to another function.

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function times(num1, num2) {
  return num1 * num2;
}

// Passing the function call's return value to console.log()
console.log(add(20, 45));

// Passing function calls to other functions
console.log(times(add(20, 45), subtract(80, 10)));