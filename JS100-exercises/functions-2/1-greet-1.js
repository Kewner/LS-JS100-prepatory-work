// How can we alter the function definition of greet so that the parameter
// greeting is assigned a default value of 'Hello' when no argument is passed to
// the function invocation?

function greet(greeting = 'Hello') {
  console.log(greeting + ', world!');
}

greet('Salutations'); // logs: Salutations, world!

greet();              // logs: undefined, world!
                      // should log: Hello, world!

// What happens when we call greet(undefined)?
// It will use the default parameter, because undefined is a falsy value.

greet(undefined);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

// Default function parameters allow named parameters to be initialized with
// default values if no value or undefined is passed.