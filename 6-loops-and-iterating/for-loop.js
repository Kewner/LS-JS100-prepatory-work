// for loops combine variable initialization, a loop condition and the variable
// increment/decrement expression all on the same line.

let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let i = 0; i < names.length; i += 1) {
  upperNames.push(names[i].toUpperCase());
}

console.log(upperNames);  // ['CHRIS', 'KEVIN', 'NAVEED', 'PETE', 'VICTOR']