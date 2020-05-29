// Run the following code.

let tweet = 'Woohoo! :-)';

if (tweet.length > 140) {
  console.log('Tweet is too long!');
}

// You'll see that it raises an error:
// TypeError: tweet.length is not a function
// Check the documentation of both TypeError and length, in order to find out
// what causes the error.

// .length is a property, not a function, so there should be no parentheses.
// .length should return a number, so JS expects a number; we try to use it
// as a function, so JS gives a TypeError.