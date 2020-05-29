// Write a function, evenOrOdd, that determines whether its argument is an even
// number. If it is, the function should log 'even' to the console; otherwise, it
// should log 'odd'. For now, assume that the argument is always an integer.

// Using a function declaration:
function evenOrOdd(num) {
  if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(6);

// Using a function expression with the ternary operator:
let evenOrOddExp = function(num) {
  num % 2 === 0 ? console.log('even') : console.log('odd');
}

evenOrOddExp(7);

// As an arrow function with the ternary operator:
let evenOrOddArrow = (num) => num % 2 === 0 ? console.log('even') : console.log('odd');

evenOrOddArrow(430);