// Before running any code, determine what difference there will be in the
// output of the two code snippets below(if any).

let ocean1 = {};
let prefix1 = 'Indian';

ocean1.prefix1 = 'Pacific';

console.log(ocean1);

// This will log { prefix1: 'Pacific' }
// The dot notation will add a property 'prefix' to ocean.

let ocean2 = {};
let prefix2 = 'Indian';

ocean2[prefix2] = 'Pacific';

console.log(ocean2);

// This will log { Indian: 'Pacific' }
// Bracket notation accepts expressions, including variables.