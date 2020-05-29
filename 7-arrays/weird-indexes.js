// You can create 'elements' with indexes that use negative or non-integer
// values, or even non-numeric values.

arr = [1, 2, 3]
arr[-3] = 4
console.log(arr);   // logs [ 1, 2, 3, '-3': 4 ]

arr[3.1415] = 'pi';
arr['cat'] = 'Fluffy';
console.log(arr);         // logs [ 1, 2, 3, '-3': 4, '3.1415': 'pi', cat: 'Fluffy' ]
console.log(arr['cat']);  // logs Fluffy

// These aren't true elements; they are properties on the array object.
// They don't count towards the length of the array:

console.log(arr.length);  // logs 3