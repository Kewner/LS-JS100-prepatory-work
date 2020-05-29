// A while loop uses the while keyword followed by a conditional expression in
// parentheses and a block. It can, for example, be used to loop over arrays.
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
let index = 0;

while (index < names.length) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
  index += 1;
}

console.log(upperNames);  // ['CHRIS', 'KEVIN', 'NAVEED', 'PETE', 'VICTOR']

// A do/while loop runs at least once, and only then checks the conditional.
// This loop will keep running as long as the input from the user is 'y'.
rlSync = require('readline-sync');

let answer;

do {
  answer = rlSync.question('Do you want to do that again? ');
} while (answer === 'y');