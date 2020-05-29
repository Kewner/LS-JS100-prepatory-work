// Write a function that computes and returns the factorial (see exercise 4 in
// the Functions chapter) of a number by using a for loop. You may assume that
// the argument is a valid non-negative integer.

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  for (let i = num; i > 1; i -= 1) {
    return num * (factorial(num - 1));
  }
}

console.log(factorial(0));     // => 1
console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320

// LS solution
function factorialLS(number) {
  let result = 1;
  for (let i = number; i > 0; i -= 1) {
    result *= i;
  }

  return result;
}

console.log(factorialLS(0));     // => 1
console.log(factorialLS(1));     // => 1
console.log(factorialLS(2));     // => 2
console.log(factorialLS(3));     // => 6
console.log(factorialLS(4));     // => 24
console.log(factorialLS(5));     // => 120
console.log(factorialLS(6));     // => 720
console.log(factorialLS(7));     // => 5040
console.log(factorialLS(8));     // => 40320