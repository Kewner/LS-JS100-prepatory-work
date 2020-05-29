// Let's improve our previous implementation of evenOrOdd. Add a validation check
// to ensure that the argument is an integer. If it isn't, the function should
// issue an error message and return.

function evenOrOdd(num) {
  if (typeof num === 'number') {
      if (num % 2 === 0) {
        console.log('even');
      } else {
        console.log('odd');
      }
    } else {
      console.log(`'${num}' is not a valid number!`);
    }

}

evenOrOdd(6);
evenOrOdd('hello')

// LS solution:
function evenOrOddLS(num) {
  if (!Number.isInteger(num)) {
    console.log('Sorry, the value you passed is not an integer.');
    return;
  }

  if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOddLS(6);
evenOrOddLS('hello')