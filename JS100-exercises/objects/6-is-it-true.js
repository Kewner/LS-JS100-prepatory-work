// We are experimenting with some code to get more comfortable working with
// objects. Run the snippet below and explain why "It's true!" is never output.

let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
}

for (prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

// While looping through the object's properties, JS never encounters a property
// that's equal to true. There is a property called 'true', but that's a string,
// not a boolean.

// To check:
for (prop in obj) {
  console.log(`${prop} (${typeof prop})`);
}