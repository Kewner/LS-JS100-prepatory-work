// Write a function similar to the oddLengths function from Exercise 6, but
// don't use map or filter. Instead, try to use the reduce method.

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let numbers = [1, 2, 3, 4];

function oddLengths(array) {
  return array.reduce((acc, cur) => acc + cur.length, '')
}

console.log(oddLengths(arr));





// Use map and filter to first determine the lengths of all the elements in an
// array of string values, then discard the even values (keep the odd values).

// let array = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(array)); // => [1, 5, 3]

// function oddLengths(arr) {
//   return arr.map(value => value.length).filter(value => value % 2 !== 0);
// }