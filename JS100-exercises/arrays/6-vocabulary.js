// We've been given an array of vocabulary words grouped into sub-arrays by
// meaning. This is a two-dimensional array or a nested array. Write some code
// that iterates through the sub-arrays and logs each vocabulary word to the
// console.

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

// Expected output:
// happy
// cheerful
// merry
// etc...

for (let i = 0; i < vocabulary.length; i += 1) {
  for (let x = 0; x < vocabulary[i].length; x += 1) {
    console.log(vocabulary[i][x]);
  }
}