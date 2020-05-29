// Does the following code produce an error? Why or why not? What output does
// this code send to the console?

for (let i = 0; i < 5;) {
  console.log(i += 1);
}

// console.log(i += 1) will print 1 to the console, and i will be 1.
// then it will print 2 to the console, and i will be 2.
// then it will print 3 to the console, and i will be 3.
// then it will print 4 to the console, and i will be 4.
// then it will print 5 to the console, and i will be 5.
// then it will quit the loop.

// LS explanation
// Although i is 0 on the first iteration, the loop logs 1 during that iteration
// since i += 1 increments i before console.log gets to log anything. i += 1 also
// returns the new value of i (1), and that's what gets passed to console.log.
// Similar actions occur on each iteration: the output is always 1 greater than
// the initial value of i, and i += 1 takes care of incrementing i to the next
// higher number, then passes that value to console.log.