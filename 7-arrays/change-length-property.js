// If you change an array's length property to a smaller value, the array gets
// truncated: all elements beyond the new final element will be removed.

// If you change an array's length property to a larger value, the array expands
// to the new size: the new elements do not get initialized.

let arr = [];
arr.length = 3;

console.log(arr);     // logs [ <3 empty items> ]
console.log(arr[0])   // logs undefined

arr.filter(element => element === undefined)  // returns []
arr.forEach(element => console.log(element)); // logs nothing, returns undefined

arr[1] = 3;
console.log(arr);         // logs [ <1 empty item>, 3, <1 empty item> ]
console.log(arr.length);  // logs 3

arr.forEach(element => console.log(element)); // logs 3, returns undefined

Object.keys(arr) // returns ['1']