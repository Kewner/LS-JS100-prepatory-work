// Variables that have primitive values store those values in the variable.
// When assigning a new value to it, JS changes the variable's content to the
// new value - a simple operation that doesn't affect other variables.

let a = 5;
let b = a;
a = 8;
console.log(a); // logs 8, which is stored in the variable a
console.log(b); // logs 5, which is stored in the variable b

// It's different with objects. The example below shows that reassignment does
// not affect any other variables that happen to have the same value.
let c = [1, 2];
let d = c;
c = [3, 4]; // creates new object in memory

console.log(c); // [3, 4]
console.log(d); // [1, 2]

// However, when mutating an object, it will affect all other variables that
// reference (point to) that same object in memory:
let e = [1, 2];
let f = e;
e.push(3, 4);

// variables e and f are aliases for the same value:
console.log(e); // logs [1, 2, 3, 4]
console.log(f); // logs [1, 2, 3, 4] points to the same object in memory

// So, when reassigning a variable, it does not mutate other variables' values.
// However, when reassigning a specific element of an object, it does.
let g = ['a', 'b', 'c'];
let h = g;
g[1] = 'x'; // this reassignment mutates the array

console.log(g); // logs ['a', 'x', 'c']
console.log(h); // logs ['a', 'x', 'c']