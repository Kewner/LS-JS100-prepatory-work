// The code provided below will randomly initialize randomNumber to either 0 or
// 1 each time it is executed.

// Write an if statement that logs 'Yes!' if randomNumber is 1, and 'No.' if
// randomNumber is 0.

let randomNumber = Math.round(Math.random());

if (randomNumber) {
  console.log('Yes!');
} else {
  console.log('No');
}

// Another way to do this is with the ternary operator:
randomNumber === 1 ? console.log('Yes!') : console.log('No');


// Math.random()
// Returns a pseudo-random number between 0 and 1.

// Math.round(x)
// Returns the value of a number rounded to the nearest integer.