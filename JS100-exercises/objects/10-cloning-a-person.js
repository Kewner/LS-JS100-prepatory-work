// Write a function clone that takes an object as argument and returns a shallow
// copy of that argument. Shallow copy means that it returns a new object that has
// the same key/value pairs, but that you don't need to worry about cloning the
// values as well. The code below demonstrates the expected behaviour.

function clone(obj) {
  let entries = Object.entries(obj);
  return Object.fromEntries(entries);
}

// function clone(obj) {
//   return Object.assign({}, obj);
// }

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
}

let clonedPerson = clone(person);

clonedPerson.name.isStageName = false;
console.log(person.name.isStageName); // logs false
console.log(clonedPerson.name.isStageName); // logs false

person.age = 34;
console.log(person.age);       // logs 34
console.log(clonedPerson.age); // logs 33