// Write a dynamic greeter program named greeter.js. The program should contain a
// function that takes one argument, name, and logs a Hello, {name}! message to
// the console. You should replace {name} with the value of the name argument.

let rlSync = require('readline-sync');

let name = rlSync.question('What is your name? ');
let age = rlSync.question(`How old are you? `);

console.log(`Well ${name}, ${age} is an awesome age!`);