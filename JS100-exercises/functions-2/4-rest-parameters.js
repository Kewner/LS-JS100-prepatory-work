// How can we refactor the function definition below (without changing the
// function invocation) so that we don't need to use the arguments object?

// function sum() {
//   values = Array.prototype.slice.call(arguments);

//   return values.reduce(function(a, b) {
//     return a + b;
//   });
// }

function sum(...theArgs) {
  return theArgs.reduce(function(a, b) {
    return a + b;
  });
}

console.log(sum(1, 4, 5, 6)); // 16

// The rest parameter syntax allows us to represent an indefinite number
// of arguments as an array.