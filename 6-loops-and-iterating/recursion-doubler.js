// Recursive functions are functions that call themselves, which has a close
// relationship to loops.

function doubler(number) {
  console.log(number);

  if (number <= 50) {
    doubler(number * 2);
  }
}

doubler(1); // logs: 1, 2, 4, 8, 16, 32, 64

// Each invocation of doubler logs a new number, then calls itself with a new
// value twice that of the input number.