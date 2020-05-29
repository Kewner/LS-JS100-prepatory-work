// Reimplement the factorial function from exercise 2 using recursion. Once
// again, you may assume that the argument is a valid non-negative integer.
let result;

// function factorial(number) {
//   if (number > 0) {
//     result = (number * factorial(number - 1));
//   }

//   return result;
// }

function factorial(number) {
  if (number > 1) {
    result = number * factorial(number - 1);
  }

  return result;
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

