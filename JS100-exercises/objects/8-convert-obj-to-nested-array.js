// Convert the person object into a nested array nestedPerson, containing the
// same key-value pairs.

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
}

person = Object.entries(person);
console.log(person);

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

// Using a for loop:
let person2 = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
}

let array = [];

for (prop in person2) {
  array.push([prop, person2[prop]]);
}

console.log(array);