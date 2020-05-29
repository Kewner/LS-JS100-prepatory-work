// Write a function that logs whether a number is between 0 and 50 (inclusive),
// between 51 and 100 (inclusive), greater than 100, or less than 0.

function numberRange(number) {
  if (number < 0) {
    console.log(`${number} is less than 0.`);
  } else if (number < 51) {
    console.log(`${number} is between 0 and 50.`);
  } else if (number < 101) {
    console.log(`${number} is between 51 and 100.`);
  } else {
    console.log(`${number} is greater than 100.`);
  }
}

numberRange(25);   // '25 is between 0 and 50'
numberRange(75);   // '75 is between 51 and 100'
numberRange(125);  // '125 is greater than 100'
numberRange(-25);  // '-25 is less than 0'

function numberRangeSwitch(number) {
  switch(number) {
    case number < 0:
      console.log(`${number} is less than 0.`);
      break;
    case number < 51:
      console.log(`${number} is between 0 and 50.`);
      break;
    case number < 101:
      console.log(`${number} is between 51 and 100.`);
      break;
    default:
      console.log(`${number} is greater than 100.`);
      break;
  }
}

numberRangeSwitch(25);   // '25 is between 0 and 50'
numberRangeSwitch(75);   // '75 is between 51 and 100'
numberRangeSwitch(125);  // '125 is greater than 100'
numberRangeSwitch(-25);  // '-25 is less than 0'