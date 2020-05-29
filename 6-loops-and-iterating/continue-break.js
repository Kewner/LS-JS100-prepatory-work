// The keyword 'continue' lets you start a new iteration of the loop. This code
// can be rewritten with a loop that uses a negated if conditional; however, 
// the 'continue' keyword can lead to a more elegant solution to a problem.

let allNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let allNumsExceptFive = [];

for (let i = 0; i < allNums.length; i += 1) {
  // if (allNums[i] === 5) {
  //   continue;
  // }
  if (allNums[i] === 5) continue;

  allNumsExceptFive.push(allNums[i]);
}

console.log(allNumsExceptFive); // [1, 2, 3, 4, 6, 7, 8, 9]

// The keyword 'break' terminates a loop early.

let array = [3, 1, 5, 9, 2, 6, 4, 7];
let indexOfFive = -1; // this value is used when the array doesn't contain 5

for (let i = 0; i < array.length; i += 1) {
  if (array[i] === 5) {
    indexOfFive = i;
    break;
  }
}

console.log(indexOfFive);