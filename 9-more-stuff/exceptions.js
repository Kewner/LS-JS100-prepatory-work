// JS fails silently, by returning a value like NaN, undefined, null or -1.
// Not all errors are silent: in such cases JS raises an error or throws an
// exception, then halts the program if the program does not catch the exception.

// Exception handling deals with errors in a manageable, predictable manner.
// To do that, we can use try/catch statements.

try {
  // perform an operation that may produce an error
} catch (exception) {
  // an error has occured. do something about it here.
  // for example, log the error.
} finally {
  // optional block; not used often.
  // executes even if an exception occurs.
}

// Example
let names = ['bob', 'joe', 'steve', undefined, 'frank'];

names.forEach(name => {
  console.log(`${name}'s name has ${name.length} letters in it.`);
});

// Logs:
// bob's name has 3 letters in it.
// joe's name has 3 letters in it.
// steve's name has 5 letters in it.
// TypeError: Cannot read property 'length' of undefined
//     at C:\LS_JS-intro\9-more-stuff\exceptions.js:22:42
//     at Array.forEach (<anonymous>)

// Add some exception handling to this program:
names.forEach(name => {
  try {
    console.log(`${name}'s name has ${name.length} letters in it.`);
  } catch (exception) {
    console.log('Something went wrong.');
  }
});

// Logs:
// bob's name has 3 letters in it.
// joe's name has 3 letters in it.
// steve's name has 5 letters in it.
// Something went wrong.
// frank's name has 5 letters in it.

// It's also possible to raise your own exceptions.
function foo(number) {
  if (typeof number !== "number") {
    throw new TypeError("expected a number");
  }

  console.log(`Thank you for the number ${number}!`);
}

foo(5); // logs 'Thank you for the number 5!'
foo('hi'); // TypeError: expected a number

// The throw keyword raises an exception of the type specified as an argument,
// which is usually given as new followed by one of the Error types described on
// this page. In this case, we use a TypeError to indicate that we were
// expecting a different type for the number argument.

// Don't raise exceptions for preventable conditions. Exceptions are for
// exceptional circumstances: situations that your program can't control very
// easily, such as not being able to connect to a a remote site in a web
// application. The example shown above that tests the argument type is probably
// not something that you want to do in a real application. Instead, your code
// should never call foo with a non-numeric argument, or you should return some
// sort of error indicator like null or undefined.