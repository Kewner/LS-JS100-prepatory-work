// The destinations array contains a list of travel destinations.

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

// Write a function that checks whether or not a particular destination
// is included within destinations, without using the built-in method
// Array.prototype.includes().

// For example: When checking whether 'Barcelona' is contained in
// destinations, the expected output is true, whereas the expected output
// for 'Nashville' is false.

function contains(item, array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === item) return true;
  }
  return false;
}

contains('Barcelona', destinations); // true
contains('Nashville', destinations); // false

// LS alternative solution:
function containss(element, list) {
  return list.indexOf(element) >= 0;
}

// indexOf() returns -1 if element is not in array.

// A consequence of using strict equality is that both solutions work only
// for primitive types like strings. For objects, the equality check would
// test whether the input object and the elements in the list are the same
// object in terms of reference, which might not be the case. For example:

let lists = [[1, 2], [3], [4, 5, 6]];

containss([3], lists); // false

// There is, in fact, no straightforward built-in way to test the value
// equality of two arbitrary objects in JavaScript. But there are libraries
// that provide this functionality, for example Lodash's isEqual method.
// Don't worry about this yet, though.