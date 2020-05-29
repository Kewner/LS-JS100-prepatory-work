// Let's make the problem a little harder. In this problem, we're again
// interested in even numbers, but this time the numbers are in nested arrays
// in a single outer array.

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

// Using a for loop with a nested for loop
for (let i = 0; i < myArray.length; i += 1) {
  for (let x = 0; x < myArray[i].length; x += 1) {
    if (myArray[i][x] % 2 === 0) console.log(myArray[i][x]);
  }
}

// Using a for loop with a nested forEach
for (let i = 0; i < myArray.length; i += 1) {
  myArray[i].forEach(function (number) {
    if (number % 2 ===0) console.log(number);
  })
}

// Using forEach with a nested forEach
myArray.forEach(function (subArray) {
  subArray.forEach(function (number) {
    if (number % 2 === 0) console.log(number);
  })
})

// Using forEach with a nested for loop
myArray.forEach(function (subArray) {
  for (let i = 0; i < subArray.length; i += 1) {
    if (subArray[i] % 2 === 0) console.log(subArray[i]);
  }
})