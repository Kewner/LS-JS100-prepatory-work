// Function declaration: can be called before declaring it.

greetPeople();

function greetPeople() {
  console.log('Good Morning');
}

// Function expression: saving the function to a variable when declaring it.
// Function expressions cannot be called before they are declared.

let greetHumans = function() {
  console.log('Good Morning');
}

greetHumans();

// Arrow functions have implicit returns: when the body function contains one
// expression, the return statement can be omitted. With 2 or more statements,
// the return value has to be explicitly returned, if needed, and curly braces
// must be used.

let add = (a, b) => a + b;    // just 1 statement: implicit return

let mathStuff = (a, b) => {
  let thirdNumber = a + b;
  return thirdNumber * a * b; // more than 1 statement: explicit return required
}

console.log(mathStuff(5, 3)); // logs 120

// If the array function defines just one parameter, the parentheses are optional.
let printNum = num => console.log(num);
printNum(12);

// JS functions are first-class functions, which means they can be treated as
// any other value: assign them to variables, pass them as arguments and return
// them from a function call.