// Explain why this code logs '510' instead of 15.

console.log('5' + 10);

// Because '5' is a string, JS coerces 10 to a string as well.
// Then it concatenates the two strings.