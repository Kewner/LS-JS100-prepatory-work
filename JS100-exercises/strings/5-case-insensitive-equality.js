// Given strings like the following, how can you check whether they're equal
// irrespective of whether the characters they contain are upper orlower case?

let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

console.log(string1.toUpperCase() === string2.toUpperCase()); // logs true
console.log(string1.toLowerCase() === string2.toLowerCase()); // logs true
console.log(string1.toUpperCase() === string3.toUpperCase()); // logs false