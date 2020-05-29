// Write a function that takes a string as an argument and returns an all-caps
// version of the string when the string is longer than 10 characters. Otherwise,
// it should return the original string. Example: change 'hello world' to 'HELLO
// WORLD', but don't change 'goodbye'.

// Using an if/else statement
function allCaps(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

console.log(allCaps('bladiebladie'));
console.log(allCaps('bladie'));

// Using the ternary operator
function toCaps(string) {
  return (string.length > 10 ? string.toUpperCase() : string);
}

console.log(toCaps('bladiebladie'));
console.log(toCaps('bladie'));