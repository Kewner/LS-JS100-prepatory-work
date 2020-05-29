// What does this code log to the console? Why?

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

// This will log:
// [ 1, 4, 3 ]

// On line 5 we reassign the second element of array1, which references the same
// array as the array2 variable does. Reassignment of a variable doesn't mutate
// an array, but reassignment of an element does.