// Predict the output of the below code. When you run the code, do you see
// what you expected? Why or why not?

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);

// This will log false: even though both arrays contain the same values, they
// are stored in seperate locations in memory (because they're objects).

let array3 = [2, 6, 4];
let array4 = array3;

console.log(array3 === array4);

// This logs true, because both variables are reference to the same object
// in memory.