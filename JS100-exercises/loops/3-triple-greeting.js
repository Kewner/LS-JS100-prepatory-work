// Write a loop that logs greeting three times.

let greeting = 'Aloha!';

// for loop
for (let i = 0; i < 3; i += 1) {
  console.log(greeting);
}

// while loop
let i = 0;

while (i < 3) {
  console.log(greeting);
  i += 1;
}

// do/while loop
let x = 0;

do {
  console.log(greeting);
  x += 1
} while (x < 3);

// it logs, then sets x to 1
// it logs, then sets x to 2
// it logs, then sets x to 3
// quits loop