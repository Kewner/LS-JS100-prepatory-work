// Implement a function repeat that repeats an input string a given number of
// times, as shown in the example below; without using the pre-defined string
// method String.prototype.repeat().

console.log(repeat(3, 'ha')); // 'hahaha'

function repeat(times, string) {
  let result = '';
  let i = 0;

  while (i < times) {
    result = result.concat(string);
    i += 1;
  }

  return result;
}

// LS solution
console.log(repeatLS(3, 'ha')); // 'hahaha'

function repeatLS(n, string) {
  let repetitions = '';

  while (n > 0) {
    repetitions += string;
    n -= 1;
  }

  return repetitions;
}