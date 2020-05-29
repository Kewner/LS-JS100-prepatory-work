// What will the following code log to the console and why? Don't run it until
// you have tried to answer.

let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

// This will log false, because the new b variable is declared inside of the
// if block, which means it's another variable with another scope than the
// first b variable.