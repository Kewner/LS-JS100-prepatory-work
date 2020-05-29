// What will the following code log to the console and why? Don't run it
// until you have tried to answer.

const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);

// This will log { firstName: 'Jane', lastName: 'Doe' }

// The 'a' object has been declared in the global scope, so its properties can
// also be accessed from inside the function.

// Further Exploration
// One way to make an object immutable is by means of the Object.freeze() method.
// But it's important to note that this is a shallow freeze, meaning it only
// applies to the immediate properties of the object. If the value of those
// properties are objects themselves, they can still be mutated.

let b = {
  firstName: 'John',
  lastName: 'Doe',
  hobbies: ['tennis', 'movies', 'fishing']
}

Object.freeze(b);

b.firstName = 'Jane';
console.log(b);

// JS doesn't raise an error, but the property has not been changed.

b.hobbies[1] = 'television';
console.log(b);

// The hobbies property has been changed: ['tennis', 'television', 'fishing']