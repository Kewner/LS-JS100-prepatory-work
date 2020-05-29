// Create an array from the keys of object obj below, with all values converted
// to uppercase. Your implementation must not mutate obj.
let obj = {
  b: 2,
  a: 1,
  c: 3,
};

// Using Object.keys
let upperKeys = Object.keys(obj).map(key => key.toUpperCase());
console.log(upperKeys);

// Using a for loop
let upperCaseKeys = [];

for (property in obj) {
  upperCaseKeys.push(property.toUpperCase());
}

console.log(upperCaseKeys);

// Using forEach
let objKeys = [];

Object.keys(obj).forEach(function(key) {
  objKeys.push(key.toUpperCase());
})

console.log(objKeys);