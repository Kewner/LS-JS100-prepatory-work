
// Node.js has an API, readline, that lets JS read input from the command line.

// 'npm install readline-sync --save' will install the package in the
// node-modules subdirectory of your current directory, in which it can be used.

// Node's built-in function 'require' is used to import readline-sync into the
// program. IT returns the library as an object, which is assigned to rlSync.

// Then we call the question method, which displays its string argument and 
// waits for the user to respond. When the user presses enter, it returns that
// text to the program. That text is then assigned to the name variable.

let rlSync = require('readline-sync');
let name = rlSync.question("What's your name?\n")

let firstNum = rlSync.question(`Good day, ${name}!\nWhat's the first number you'd like to multiply? `);
let secondNum = rlSync.question(`${firstNum}, that's nice. How about the second number? `);

Number(firstNum);
Number(secondNum);

console.log(`Well, ${firstNum} times ${secondNum} is ${firstNum * secondNum}!`);