// JS has first-class functions: they are values and they can be used as values.
// By passing a function (as an argument) to the forEach method, forEach loops
// through each element in an array, invoking the anonymous (callback) function
// for each array item.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(function (num) {
  console.log(num * num);
})

// A more concise way of writing it:

numbers.forEach(num => console.log(num * num));
