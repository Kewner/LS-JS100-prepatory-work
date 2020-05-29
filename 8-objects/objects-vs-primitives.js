// Primitives:
// - Strings
// - Numbers
// - Booleans
// - null
// - undefined

// Objects include:
// - simple Objects
// - arrays
// - date Objects
// - Functions

// Objects are complex values composed of primitive values or other objects.
// We can change parts of an object, which means that objects are mutable.

// Primitives, however, are immutable (atomic, indivisible). If a variable
// containes a primitive value, all you can do to that variable is use it in an 
// expression or reassign it. Even 0 + 0 evaluates to a new value of 0.

let number = 20;
let newNumber = number + 1;
console.log(newNumber);   // logs 21
console.log(number);      // logs 20

let object = { a: 1, b: 2, c: 3};
object.c = object.c + 1;

console.log(object);