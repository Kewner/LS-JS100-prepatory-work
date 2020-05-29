// Which of the following values are valid keys for an object?

// 1
// '1'
// undefined
// 'hello world'
// true
// 'true'

// All of them: the ones that aren't strings will be coerced to strings.

let myObj = {}

myObj[true] = 'hello';
myObj['true'] = 'world';
console.log(myObj[true])  // logs 'world'