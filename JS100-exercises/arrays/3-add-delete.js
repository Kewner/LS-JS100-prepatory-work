// We are given the following array of energy sources.

let energy1 = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
let energy2 = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
let energy3 = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

// Remove 'fossil' from the array, then add 'geothermal' to the end of the array.

// using splice and push
energy1.splice(0, 1);
energy1.push('geothermal');
console.log(energy1);

// using slice (omitting the second argument) and push
energy2 = energy2.slice(1);
energy2.push('geothermal');
console.log(energy2);

// using shift and element assignment
energy3.shift();
energy3[energy3.length] = 'geothermal';
console.log(energy3);