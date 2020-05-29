// We generated parts of a passcode and now want to combine them into a string.
// Write some code that returns a string, with each portion of the passcode
// separated by a hyphen (-).

let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

// Using the .join method:
console.log(passcode.join('-'));  // logs '11-jZ5-hQ3f*-8!7g3-p3Fs'

// How can you join all elements of an array with no separator character?
console.log(passcode.join(''));

// Using a for loop:
let result = '';

for (let i = 0; i < passcode.length; i += 1) {
  if (i === passcode.length - 1) {
    result += passcode[i];    // result = result + passcode[i];
    break;
  }

  result += passcode[i] + '-';  // result = result + passcode[i] + '-';
}

console.log(result);  // logs 11-jZ5-hQ3f*-8!7g3-p3Fs

// LS solution using a for loop:
let joinedPasscode = '';
let i;

for (i = 0; i < passcode.length; i += 1) {
  if (i > 0) {
    joinedPasscode += '-';
  }

  joinedPasscode += passcode[i];
}

console.log(joinedPasscode);