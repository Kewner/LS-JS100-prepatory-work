// What will the following code log to the console and why? Don't run it until
// you have tried to answer.

console.log(greeting);

var greeting = 'Hello world!';

// It will log: undefined.
// var variable declarations are hoisted: they are moved to the beginning of the
// scope. The code above behaves like the following code:

var greeting2;

console.log(greeting2);

greeting2 = 'Hello world!';