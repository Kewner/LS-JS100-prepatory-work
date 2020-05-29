// What is the difference between the following two code snippets?
// Check the MDN documentation on while and do...while.

// #1
let counter1 = 0;

while (counter1 > 0) {
  console.log('Woooot!');
  counter1 -= 1;
}

// #2
let counter2 = 0;

do {
  console.log('Woooot!');
  counter2 -= 1;
} while (counter2 > 0);

// The first loop won't log anything, because it first checks the conditional;
// the second loop will log 'Woooot!' once first, only then checks the
// conditional and quits the loop.