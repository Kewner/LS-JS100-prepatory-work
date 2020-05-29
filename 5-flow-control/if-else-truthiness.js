// JS can coerce any value to a boolean.

// Example 1
a = 5;

if (a) {  // 5 evaluates to true
  console.log('How can this be true?');
} else {
  console.log('It is not true.');
}

// Example 2
b = 0;

if (b) {  // 0 evaluates to false
  console.log('How can this be true?');
} else {
  console.log('It is not true.');
}

// Example 3
let x;

if (x = 5) {  // x is assigned to 5, then its return value (5) is evaluated
  console.log('How can this be true?');
} else {
  console.log('It is not true.');
}


// JS treats the following values as false:
// - false
// - the number 0
// - an empty string ''
// - undefined
// - null
// - NaN