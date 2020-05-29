let firstName;          // return value of variable declaration: undefined
firstName = 'Mitchell'; // return value of (re)assignment: 'Mitchell'

let a = 4;        // undefined
let b = a;        // undefined
a = 7;            // 7
console.log(b);   // undefined, prints: 4

// When working with primitive types, variables reference values in memory that
// aren't deeply linked.

// A const variable cannot be reassigned.
const INTEREST_RATE = 0.0783;