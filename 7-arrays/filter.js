// filter returns a new array that includes all elements from the calling array
// for which the callback returns a truthy value.

// filter does not mutate the caller.

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2];
let numsFiltered = nums.filter(num => num > 4);   // returns [5, 6, 7, 8, 9, 10]

console.log(nums);          // numbers is unchanged
console.log(numsFiltered);  // [5, 6, 7, 8, 9, 10]