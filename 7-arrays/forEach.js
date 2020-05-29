// To use forEach, a callback function has to be passed to it as its argument,
// which then performs one or more action on its argument. forEach iterates
// over the elements in the array, and invokes the callback once for each
// element; it passed the element's value as an argument to the callback.

// forEach ALWAYS returns undefined.

let array = [1, 2, 3];

array.forEach(function (num) {
  console.log(num);
});
// returns undefined, logs 1 2 3

array.forEach(num => console.log(num * 3));
// returns undefined, logs 3 6 9