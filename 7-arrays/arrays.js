const array = [15, 2, 2, 3, 18, 12, 37, 5, 387, 34, 1];
const arrayTwo = [18, 'hi there', [3, 4], 8, 356, 'twelve', 'hello'];

// DESTRUCTIVE (MUTATING THE CALLER) -------------------------------------------

// Modifying and adding elements
array[0] = 33;            // returns 3
array[array.length] = 21  // returns 21
array.push(10);           // returns 5 (new length of array)

// Removing elements
array.pop();              // returns the removed value
array.splice(3, 2)        // starts at index 3, removes 2 elements
                          // returns new array of deleted items

// Sorting the elements
array.sort();             // returns a sorted array

// Reversing the order of an array
array.reverse();          // returns [5, 387, 37, 34, 33, 21, 2, 2, 12, 1]


console.log(array);


// NON-DESTRUCTIVE (NOT MUTATING THE CALLER) -----------------------------------

// Adding elements

arrayTwo.concat(41);         // returns new array: [15, 2, 3, 4, 5, 10, 1, 41]

// Determining whether an array includes a given element

arrayTwo.includes(33);       // returns true
arrayTwo.includes([3, 4]);   // returns false, because includes uses ===

// Extract and return a portion of the array (start index, end index). The
// element of the ending index is excluded.

arrayTwo.slice(3, 5);       // returns [8, 356]

// When omitting the second argument, slice returns the rest of the array
// starting with the first argument index.

arrayTwo.slice(3);          // returns [8, 356, 'twelve', 'hello']

// Without any arguments, slice returns a copy of the entire array.

arrayTwo.slice();           // returns [ 18, 'hi there', [ 3, 4 ], 8, 356, 'twelve', 'hello' ]

console.log(arrayTwo);



// The reverse method is destructive, but you can use slice with no arguments
// if you don't want to mutate the original array:

let numbers = [1, 2, 3, 4];
let reversedNumbers = numbers.slice().reverse();

console.log(reversedNumbers);   // logs [ 4, 3, 2, 1 ]
console.log(numbers);           // logs [ 1, 2, 3, 4 ]