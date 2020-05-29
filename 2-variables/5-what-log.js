// Take a look at this code snippet:

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// What does this program log to the console? Why?
// It will log 'bar' to the console, because the foo variable containing 'qux'
// is in another scope.