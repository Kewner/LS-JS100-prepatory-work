// Write code that stores all of the vehicle property names in an array called keys.

let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

// Using the Object.keys() method
let keys1 = Object.keys(vehicle);
console.log(keys1);

// Using a for/in loop
let keys2 = [];

for (prop in vehicle) {
  keys2.push(prop);
}

console.log(keys2);