// JS treats two arrays as equal when they occupy the same spot in memory.
// This is true for object in general

// This returns false, because these arrays occupy different spots in memory.
[1, 2, 3] === [1, 2, 3];

// This returns true, because b references the same array as a does.
let a = [1, 2, 3];
let b = a;
a === b;

// So how to check whether two arrays have the same elements?
function arraysEqual(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) return false;

  for (let i = 0; i < arrOne.length; i += 1) {
    if (arrOne[i] !== arrTwo[i]) return false;
  }

  return true;
}

console.log(arraysEqual([1, 2, 3], [1, 2, 3]));       // logs true
console.log(arraysEqual([4, 5, 6], [1, 2, 3]));       // logs false
console.log(arraysEqual([1, 2, 3, 4, 5], [1, 2, 3])); // logs false
console.log(arraysEqual([1, 2, 3], [5, 5, 3]));       // logs false

// However, arraysEqual would not work if one pair of elements contains an 
// array or other object:

console.log(arraysEqual([1, 2, [3, 4], 5], [1, 2, [3, 4], 5]))  // logs false