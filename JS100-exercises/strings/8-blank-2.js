// Change your isBlank function from the previous exercise to return true if
// the string contains only whitespaces. For example:

// My initial solution:
function isBlank1(string) {
  if (string.length === 0) return true;

  let onlySpaces;

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] !== ' ') {
      return false;
    } else {
      onlySpaces = true;
    }
  }
  return onlySpaces;
}

// Trimmed down version:
function isBlank2(string) {
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] !== ' ') return false;
  }
  return true;
}

// LS solution:
function isBlank3(string) {
  return string.trim().length === 0;
}

isBlank3('mars'); // false
isBlank3('  ');   // true
isBlank3('');     // true