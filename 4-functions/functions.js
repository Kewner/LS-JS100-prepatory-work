// JavaScript uses the return statement to return a value to the code that
// called the function: the caller.

function add(a, b=5) {
  return a + b;
}

add(2, 3);  // returns 5

let twoAndThree = add(2, 3)   // function returns 5, then saved in a variable
let twoAnd = add(2)           // function returns 7, then saved in a variable

// Global variables can be accessed and reassigned anywhere, also in a function.
// In general, limit the scope of variables as much as possible.
let num = 15;

function changeNum(newNumber) {
  num = newNumber;
}

changeNum(4);       // returns undefined
console.log(num);   // prints 4