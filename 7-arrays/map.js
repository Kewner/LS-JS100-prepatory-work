// map creates a new array whose values depend on the original array. 

let numbers = [1, 2, 3, 4]
let squares = [];

numbers.forEach(num => squares.push(num * num));
console.log(squares);

// The callback here has side effects: it modifies the squares variable, which
// isn't part of the callback function. If we'd run this forEach again, the
// squares array would be: [1, 4, 9, 16, 1, 4, 9, 16]

// The map function handles this situations more cleanly:

let numbersMap = [1, 2, 3, 4];
let squaresMap = numbers.map(num => num * num);

console.log(squaresMap);

// map returns a new array that contains one element for each element in the
// original array, with each element set to the return value of the callback.