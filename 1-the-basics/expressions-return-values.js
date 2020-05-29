// An expression: anything that JS can evaluate to a value (almost everything)

7 + 12              // return value: 19
console.log(3 * 6)  // printed value: 18 ; return value: undefined
'hi'                // return value: 'hi'

// A statement:
// - always evaluates as undefined.
// - cannot be used as part of another expression.
// - can sometimes include expressions as part of their syntax

// Examples
let a
let b = 20            // 20 is an expression, which is part of the let statement

console.log('hello'); // A function/method call is also a statement.

// It consists of 4 expressions:
// - console
// - console.log
// - 'hello'
// - console.log('hello')

// Multiple statements can appear on a single line:
let hello = 'Hello'; console.log(hello);