// Use reduce to compute the sum of the squares of all of the numbers in an array:

let numbers = [3, 5, 7];
console.log(sumOfSquares(numbers)); // => 83

function sumOfSquares(array) {
  return array.reduce((acc, cur) => acc + (cur * cur), 0);
}

// What happens if you forget to provide an initial value of 0 for the
// accumulator? Take a look at the MDN Documentation for reduce and see if you
// can determine what sumOfSquares would return if you omitted the initial
// accumulator value.


// sumOfSquares would return 77 (3 + 5 * 5 + 7 * 7):

// initialValue (Optional)
// A value to use as the first argument to the first call of the callback. If no
// initialValue is supplied, the first element in the array will be used as the
// initial accumulator value and skipped as currentValue. Calling reduce() on an
// empty array without an initialValue will throw a TypeError.

let strings = ['a', 'b', 'c', 'd'];

let reducedStrings1 = strings.reduce((acc, cur) => acc + cur.toUpperCase(), '');
console.log(reducedStrings1);  // logs 'ABCD'

// Without supplying an initialValue (''), the result will be 'aBCD':

let reducedStrings2 = strings.reduce((acc, cur) => acc + cur.toUpperCase());
console.log(reducedStrings2);  // logs 'aBCD'