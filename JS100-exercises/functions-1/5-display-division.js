// Determine the output that the following code will log to the console.
function multiplesOfThree() {
  let divisor = 1;
  let dividend;

  for (dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

multiplesOfThree;

// This will log nothing, because without the parentheses,
// multiplesOfThree is not a function call.