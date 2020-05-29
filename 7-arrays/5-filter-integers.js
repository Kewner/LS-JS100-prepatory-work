// Use the filter method to implement a function that returns a new array with
// all of the integers from the input array. It should ignore all non-integer
// values from the input.

let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function removeNonInteger(arr) {
  return arr.filter(Number.isInteger);
}

// Since the callback function for filter doesn't do anything except call
// another function (Number.isInteger), Number.isInteger is enough.

let newArray = removeNonInteger(array);
console.log(newArray); // => [1, 3, -4]