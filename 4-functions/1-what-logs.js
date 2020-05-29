// What does this code log to the console? Does executing the foo function
// affect the output? Why or why not?

let bar = 1;

function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// This will log 1 to the console. The first bar variable is unaffected,
// because the second bar variable is declared inside a different scope.