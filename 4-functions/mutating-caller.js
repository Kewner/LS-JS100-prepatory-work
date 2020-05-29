// Some methods are mutating, some are not. Methods like toUpperCase() return a
// new value or object, but leave the caller unchanged.

let name = 'Pete Hanson';
console.log(name.toUpperCase()); // logs 'PETE HANSON'
console.log(name);               // logs 'Pete Hanson'

// Methods like pop() do mutate the caller.
let oddNumbers = [1, 3, 5, 7, 9];

oddNumbers.pop();         // returns 9
console.log(oddNumbers)   // logs [1, 3, 5, 7]

// Functions can also mutate their arguments.
function changeFirstElement(array) {
  array[0] = 9;
}

let oneToFive = [1, 2, 3, 4, 5];
changeFirstElement(oneToFive);
console.log(oneToFive); // logs [9, 2, 3, 4, 5]

// This function adds an element to an array and returns the new array.
function addToArray(array) {
  return array.concat(0);
}

let oneToSix = [1, 2, 3, 4, 5, 6];
let newArray = addToArray(oneToSix);

console.log(oneToSix);  // logs [1, 2, 3, 4, 5, 6]
console.log(newArray);  // logs [1, 2, 3, 4, 5, 6, 0]


// Primitive values, however, are immutable: operations on them always return
// a new value, while operations on mutable objects may or may not return a new
// value and may or may not mutate data.