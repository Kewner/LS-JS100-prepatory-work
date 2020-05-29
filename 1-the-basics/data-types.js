// 5 primitive data types:
// - String
// - Number
// - Undefined (absence of a value)
// - Null (intentional absence of a value)
// - Boolean

// In Node:
let foo       // undefined
foo           // undefined
let bar = 3   // undefined
bar           // 3

// typeof operator
typeof 5          // 'number'
typeof 'hi'       // 'string'
typeof true       // 'boolean'
typeof undefined  // 'undefined'
typeof null       // 'object' (mistake in JS)
typeof NaN        // 'number'

// Concatenation
'foo' + 'bar'     // 'foobar'
'1' + '2'         // 12
'4' + 2           // 42 (2 is coerced to a string: implicit type coercion)
4 - '2'           // 2 (2 is implicitly coerced to a number)

// Explicit coercion
String(5)             // '5'
Number('5')           // 5
Number('foo')         // NaN (JS doesn't raise an error, but fails silently)
parseInt('12')        // 12
parseInt('12xyz')     // 12 (stops once it encounters invalid character)
parseInt('3.14')      // 3
parseFloat('3.14xx')  // 3.14

// 2 complex data types:
// - Arrays
// - Objects

// Arrays
[1, 2, 3, 4, 5][1]    // 2

// Objects
({ dog: 'barks', cat: 'meows', pig: 'oinks' })['dog']   // 'barks'