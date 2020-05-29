// Find out how we can join two or more strings together.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat

const string1 = 'hello';
const string2 = 'you';

console.log(string1.concat(' ', string2));  // logs 'hello there'
console.log(string1.concat('', string2));   // logs 'helloyou'
console.log(string1.concat(', ', string2)); // logs hello, you

console.log(''.concat(string1, ' ', string2));  // logs hello you
console.log('hey hey'.concat(' ', string1, ' ', string2));  // logs hey hey hello you