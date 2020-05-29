// Log all of the even values from myArray to the console.

let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

// Using forEach
myArray.forEach(function (value) {
  if (value % 2 === 0) console.log(value);
})

// Using a for loop
for (let i = 0; i < myArray.length; i += 1) {
  if (myArray[i] % 2 === 0) console.log(myArray[i]);
}