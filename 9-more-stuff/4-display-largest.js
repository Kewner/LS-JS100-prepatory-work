// Given a list of numbers, write some code to find and display the largest
// numeric value in the list.

// List              Max
// 1, 6, 3, 2        6
// -1, -6, -3, -2    -1
// 2, 2              2

let array1 = [1, 6, 3, 2];
let array2 = [-1, -6, -3, -2];
let array3 = [2, 2];

console.log(array1.sort()[array1.length -1]);
console.log(array2.sort()[0]);
console.log(array3[0]);

// Or:
console.log(Math.max(1, 6, 2, 3));
console.log(Math.max(-1, -6, -3, -2));
console.log(Math.max(2, 2));