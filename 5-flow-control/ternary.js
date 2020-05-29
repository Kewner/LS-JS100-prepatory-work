// If the comparison evaluates to true, JS evaluates the second operand and
// returns its value.

// If the comparison evaluates to false, JS evaluates the thirs operand and
// returns its value. 

1 === 1 ? 'this is true' : 'this is not true'  // 'this is true'

// An if/else statement is a statement, so it doesn't have return value, while
// the ternary operator is an expression, which does have a return value.

// This means that we can treat it as a value: assign it to a variable, pass
// it as an argument and so on.

let message = true ? 'this is true' : 'this is not true';
console.log(message);  // 'this is true'

console.log(false ? 'this is true' : 'this is not true'); // 'this is not true'