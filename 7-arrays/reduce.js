// reduce takes two arguments:
//    - a callback function
//    - an value that initializes the accumulator

// the callback function also takes two arguments:
//    - an element from the array
//    - the current value of the accumulator

// It returns a value that will be used as the accumulator in the next
// invocation of the callback.

let arr = [2, 3, 5, 7];

// Sum
arr.reduce((accumulator, element) => accumulator + element, 0); // returns 17

// 1. reduce() takes two arguments: (a function, accumulator initializer).
// 2. The acc. initializer 0 sets the accumulator to 0.
// 3. On the first invocation of the callback function, acc. is 0, element is 2.
// 4. The callback returns 2, which becomes the new acc. value.
// 5. The callback is invoked again, this time with acc. 2 and element 3.
// 6. This returns 5, which becmoes the new acc. value.
// 7. Now we're at: arr.reduce(5, 5) => 5 + 5, 10
// 8. The accumulator is now 10, which is added to the last element, 7.
// 9. The final accumulator number, 17, is returned.

//  Product
arr.reduce((accumulator, element) => accumulator * element, 1); // returns 210
// 1 * 2 * 3 * 5 * 7

// reduce with strings
let stringss = ['a', 'b', 'c', 'd'];

stringss.reduce((accumulator, element) => {
  return accumulator + element.toUpperCase();
}, '');
// returns 'ABCD'

// reduce does not mutate the caller.


// About (the optional) initialValue
// A value to use as the first argument to the first call of the callback. If no
// initialValue is supplied, the first element in the array will be used as the
// initial accumulator value and skipped as currentValue. Calling reduce() on an
// empty array without an initialValue will throw a TypeError.

let strings = ['a', 'b', 'c', 'd'];

let reducedStrings1 = strings.reduce((acc, cur) => acc + cur.toUpperCase(), '');
console.log(reducedStrings1);  // logs 'ABCD'

// Without supplying an initialValue (''), the result will be 'aBCD':

let reducedStrings2 = strings.reduce((acc, cur) => acc + cur.toUpperCase());
console.log(reducedStrings2);  // logs 'aBCD'