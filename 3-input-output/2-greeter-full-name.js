// Modify the greeter.js program to ask for the user's first and last names
// separately, then greet the user with their full name.

let rlSync = require('readline-sync');

let firstName = rlSync.question('What is your first name? ');
let lastName = rlSync.question(`What is your second name? `);

console.log(`Hi ${firstName} ${lastName}!`);