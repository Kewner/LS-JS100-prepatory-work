// Object.keys is a static method that returns an array's keys.
// Even negative and non-integer indexes are included.

arr = [1, 2, 3, 4, 5];

arr[-3] = 5;
arr['cat'] = 'Fluffy';
arr.length = 10;

console.log(arr);   // [ 1, 2, 3, 4, 5, <5 empty items>, '-3': 5, cat: 'Fluffy' ]

let keys = Object.keys(arr);
console.log(keys);  // [ '0', '1', '2', '3', '4', '-3', 'cat' ]


// This method treats unset values in arrays differently from undefined.
// Unset values are set to undefined by JS as an after effect of calling another
// method, while explicit undefined are ones that are purposely set in an array.

// Examples of unset values:
var a = new Array( 3 );
var b = [];
b.length = 3

// Example of explicit undefined:
var c = [undefined, undefined, undefined];

// Logging them to the console
console.log(a);   // [ <3 empty items> ]
console.log(b);   // [ <3 empty items> ]
console.log(c);   // [ undefined, undefined, undefined ]

a[0] === undefined;   // true
b[0] === undefined;   // true
c[0] === undefined;   // true

// .length includes undefined in the count, regardless of how it got set
a.length;  // 3
b.length;  // 3
c.length;  // 3

// The Object.keys method only counts those that were set explicitly
Object.keys(a).length;  // 0
Object.keys(b).length;  // 0
Object.keys(c).length;  // 3