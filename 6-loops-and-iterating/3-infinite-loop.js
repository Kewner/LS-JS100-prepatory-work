// The following code causes an infinite loop (a loop that never stops iterating).
// Why?

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    beak;
  }
}

// counter = 1 assigns the value 1 to the counter variable. This returns true,
// which is evaluated as true, so the loop runs. Inside the loop, 1 is added
// to counter, the loop runs again and counter is resetted to a value of 1.