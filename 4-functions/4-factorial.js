// Use the times function shown below to write a program that logs the value of
// 1! (one factorial), 2! (two factorial), 3!, 4!, and 5! (five factorial) to the
// console.

function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

let factOne = times(1, 1);
let factTwo = times(2, factOne);
let factThree = times(3, factTwo);
let factFour = times(4, factThree);
let factFive = times(5, factFour);

// or:

times(times(times(times(times(1, 1), 2), 3), 4), 5)