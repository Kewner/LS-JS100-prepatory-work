// In the exercises for the previous chapter, you wrote a dynamic greeter program
// named greeter.js. Add a function to this program that solicits the user's first
// and last names in separate invocations; the function should return the
// appropriate name as a string. Use the return values to greet the user with
// their full name.

function askName(prompt) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(prompt);
    return name;
}

let firstName = askName('What is your first name? ');
let lastName = askName('What is your last name? ');

console.log(`Hi ${firstName} ${lastName}!`);