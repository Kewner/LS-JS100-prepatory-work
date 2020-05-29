// let and const have block scope: their scope is determined by where the
// variable has been declared.

if (1 === 1) {
  let b = 'bar';
}

// Variable b is not accessible outside of the if block.

let a = 'foo';

// Variable a is a global variable: it can be accessed from anywhere.

if (1 === 1) {
  a = 'bar';
}

console.log(a);

// Always declare variables with let and const: undeclared variables have global
// scope: they ignore block and function scope entirely, which causes problems.