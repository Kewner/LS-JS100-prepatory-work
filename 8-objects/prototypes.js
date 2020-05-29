// By inheriting from another object, an object can access its properties.
// Object.create creates a new object and sets the prototype for that object to
// the object passed in as an argument. 

let bob = { name: 'Bob', age: 22 };

let studentBob = Object.create(bob);
studentBob.year = 'Senior';

console.log(studentBob.name); // logs 'Bob', an inherited property
