// What does the following code log to the console?

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

// It will log nothing, because the console.log(words) expression comes after
// return, which will exit the function.