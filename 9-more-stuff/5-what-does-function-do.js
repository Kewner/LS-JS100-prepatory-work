// What does the following function do?

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

// split(' ') returns an array with parts of the string, splitted at each space.
// reverse() returns an array with the order reversed.
// map((value) => value.length) returns an array with the lengths of the items.

// So, when passing the function the argument 'I like to swim', it would return:
// [4, 2, 4, 1]

console.log(doSomething('I like to swim')); // logs [4, 2, 4, 1]