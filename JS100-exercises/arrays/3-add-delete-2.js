// We are given the following array of energy sources.

let energy1 = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
let energy2 = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
let energy3 = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

// Remove 'fossil' from the array, then add 'geothermal' to the end of the array.

// splice and push
energy1.splice(0, 1);
energy1.push('geothermal');
console.log(energy1);

// slice and element assignment
energy2 = energy2.slice(1);
energy2[energy2.length] = 'geothermal';
console.log(energy2);

// shift and push
energy3.shift();
energy3.push('geothermal');
console.log(energy3);