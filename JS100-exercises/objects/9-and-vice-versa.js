// Write code that does the reverse, starting from a nested array
// of pairs and building an object.

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

let object = {};

for (let i = 0; i < nestedArray.length; i += 1) {
  object[nestedArray[i][0]] = nestedArray[i][1];
}

console.log(object);

// LS solution:
let person = {};
let i;

for (i = 0; i < nestedArray.length; i++) {
  let pair = nestedArray[i];

  person[pair[0]] = pair[1];
}

console.log(person);