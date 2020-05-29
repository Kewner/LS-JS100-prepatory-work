// Write a function that checks whether a string is empty or not. For example:

function isBlank(string) {
  return string.length === 0 ? true : false;
}

isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true

// LS solution:
function isBlankLS(string) {
  return string.length === 0;
}