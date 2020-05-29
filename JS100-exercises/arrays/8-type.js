// How can you check whether a variable holds a value that is an array? For
// example, imagine you start writing a function and want to check whether
// its argument is an array:

let array = [1, 2, 3, 4];
let notArray = 'string';

function filter(input) {
  console.log(Array.isArray(input) ? `${input} is an array` : `${input} is not an array`);
}

filter(array);
filter(notArray);