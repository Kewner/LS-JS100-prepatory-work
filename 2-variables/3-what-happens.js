// What happens when you run the following program? Why do we get that result?

{
  let foo = 'bar';
}

console.log(foo);

// This wil result in a ReferenceError, because variable foo is only accessible
// inside the code block in which it was declared.