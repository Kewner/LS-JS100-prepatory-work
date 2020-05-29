// Below is a function that uses recursion to calculate the nth number in the
// Fibonacci sequence, in which each number is the sum of the previous two
// numbers: fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 2)

function fibonacci(number) {
  if (number < 2) {
    return number;
  } else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
}

console.log(fibonacci(6));  // the 6th Fibonacci number is 8

// see also: fibonacci-diagram.jpg

// Every recursive function has a baseline condition that marks the end of the
// recursion (number < 2 in this case) and some code that recursively calls the 
// function with a new argument.

// In most cases, the baseline condition returns a concrete value that gets
// reused as the code 'unwinds' the recursive calls.

// Each unwind step used the previous return value(s) to calculate an
// intermediate result that gets returned in the next step. 

// In the above example, the last step evaluates fibonacci(6) as
// fibonacci(5) + fibonacci(4), which yields 8.