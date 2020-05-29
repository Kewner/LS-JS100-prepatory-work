// The for/in loop behaves similarly to the for loop. It iterates over all the
// keys in the object. In each iteration, it assigns the key to a variable which
// you then use to access the object's values.
let person = {
  name: 'Bob',
  age: 30,
  height: '6 ft',
};

for (let prop in person) {  // the prop variable receives a key each iteration
  console.log(person[prop]);  // first iteration: console.log(person['name']);
}
// Bob
// 30
// 6 ft

for (let prop in person) {
  console.log(`${person['name']}'s ${prop} is ${person[prop]}.`);
}
// Bob's name is Bob.
// Bob's age is 30.
// Bob's height is 6 ft.

// The for/in loop iterates over the properties of an object's prototypes too:
let obj1 = { a: 1, b: 2 }
let obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

for (let prop in obj2) {
  console.log(obj2[prop]);
}
// 3
// 4
// 1
// 2
