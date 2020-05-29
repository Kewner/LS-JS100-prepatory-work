// Without running the below code, determine what will be logged to
// the console.

let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice);

// This will log '$3.99'
// sale equals true, so !sale equals false, so the variable is 
// assigned to the second operand.