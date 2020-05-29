// The following code uses a randomNumberBetween function to generate a number
// between its first and second arguments. It uses a while loop to try to
// generate a number greater than 2. Refactor the code so that you don't need to
// call randomNumberBetween from two different locations, lines 15 and 20. Do
// not change the arguments you pass to randomNumberBetween.


// Generates a number between its first and second arguments
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Declare a variable to keep track of the amount of tries
let tries = 0;
let result;

// Use a do/while loop to try at least once to generate a number greater than 2
do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2)

// while (result <= 2) {
//   result = randomNumberBetween(1, 6);
//   tries += 1;
// }

console.log(`It took ${String(tries)} tries to get a number greater than 2.`);