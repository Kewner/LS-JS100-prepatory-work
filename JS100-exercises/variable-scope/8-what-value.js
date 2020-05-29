// What will the following code log to the console and why? Don't run it until
// you have tried to answer.

let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);

// This will log 2: in the myFunction scope, a represents a local variable with
// the value 2, which is the argument given to the function when it was called.

// The parameter a of myFunction shadows the variable a declared on line 4.