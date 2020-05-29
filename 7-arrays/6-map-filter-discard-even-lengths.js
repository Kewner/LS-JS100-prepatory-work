// Use map and filter to first determine the lengths of all the elements in an
// array of string values, then discard the even values (keep the odd values).

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(array) {
  return array.map(value => value.length).filter(value => value % 2 !== 0);
  // let elemLengths = array.map(value => value.length);
  // return elemLengths.filter(value => value % 2 !== 0);
}

// The longer version has been commented out.