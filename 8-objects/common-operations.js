// Object.entries returns an array of nested arrays, with the keys and values.
console.log(Object.entries(person));
// logs [ [ 'name', 'Bob' ], [ 'Age', 30 ], [ 'height', '6ft' ] ]

// Object.assign can merge two or more objects.
let objA = { a: 'foo' };
let objB = { b: 'bar' };

Object.assign(objA, objB);
console.log(objA); // logs { a: 'foo', b: 'bar' }

// It mutates the first object (objA). To keep the original objects unchanged:
let objC = { a: 'foo' };
let objD = { b: 'bar' };

let newObj = Object.assign({}, objC, objD);
console.log(newObj);  // { a: 'foo', b: 'bar' }
console.log(objC);    // unchanged: { a: 'foo' }
