// The Object.keys static method returns an object's keys as an array.
let person = {
  name: 'Bob',
  age: 30,
  height: '6 ft',
};

let personKeys = Object.keys(person); // personKeys: ['name', 'age', 'height']

// With forEach, we pass each key, contained by the personKeys array, to
// console.log, to print the corresponding values (for example: person['name'])

personKeys.forEach(key => console.log(person[key]));
// Bob
// 30
// 6 ft

// Object.values returns an object's values as an array
let person = { name: 'Bob', Age: 30, height: '6ft' };
let personValues = Object.values(person);
console.log(personValues);  // logs [ 'Bob', 30, '6ft' ]


// Don't assume anything about the sequence that JavaScript uses to iterate over
// an object's keys. Some engines are predictable, but the JavaScript standard
// doesn't specify an order, so some engines take advantage of that to provide
// improved performance. Thus, you can't depend on the order of iteration.