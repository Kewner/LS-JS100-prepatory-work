// Is there a method to capitalize a string, for example turning 'mountain'
// into 'Mountain'?

// Doesn't seem like there is.
// Alternative solution:

const string = 'mountain';
const stringCap = string.charAt(0).toUpperCase() + string.slice(1);
console.log(stringCap);