// How many arguments does the Array.prototype.join() method expect? What happens
// if you call it with less or more arguments?

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// It expects one argument, a separator, which is optional.
// Without it, the array elements are separated with a comma (",").
// If separator is an empty string, all elements are joined without any 
// characters in between them.

let array = ['hi', 'there', 'how', 'are', 'you'];

console.log(array.join(' '));
console.log(array.join(''));
console.log(array.join());
console.log(array.join(' ? '));