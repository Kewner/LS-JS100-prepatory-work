// An object stores a collection of key-balue pairs.

// Objects have behavior (the perform actions) and state (they have
// characteristics that distinguish between different objects).

// The values can be any type, but the keys are always strings (even 10 below).

const person = {
  name: 'Jane',
  age: 37,
  hobbies: ['photography', 'genealogy'],
  10: 'ten',
};

// Dot notation and bracket notation

person.name;      // returns 'Jane'
person['age'];    // returns 37

// Bracket notation is required when referring to a variable or a 'numeric string'
let key = 'name';
person[key];      // returns 'Jane'
person['10'];     // returns 'ten'

// Adding key-value pairs
person.height = '5 ft';
person['gender'] = 'female';

// Deleting key-value pairs
delete person['10'];    // returns true unless it cannot delete property
delete person.hobbies;  // returns true


console.log(person);

// As with arrays, a const declaration prohibits changing what thing the const
// points to, but it does not prohibit changing the content of that thing.
// Thus, we can change a property in a const object, but we can't change which
// object the const points to.