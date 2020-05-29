// Create a function removeLastChar that takes a string as argument, and
// returns the string without the last character.

// Solution 1
function removeLastChar1(string) {
  return string.replace(string[string.length -1], '');
}

removeLastChar1('ciao!'); // 'ciao'
removeLastChar1('hello'); // 'hell'

// Solution 2
function removeLastChar2(string) {
  return string.slice(0, string.length - 1);
}

removeLastChar2('ciao!'); // 'ciao'
removeLastChar2('hello'); // 'hell'

// LS solution
function removeLastChar3(string) {
  return string.substring(0, string.length - 1);
}

removeLastChar3('ciao!'); // 'ciao'
removeLastChar3('hello'); // 'hell'