// What does this code output to the console?

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
   console.log('Empty');
  }
}

isArrayEmpty([]);   // [] is an empty Array

// This will print 'Not Empty', because an empty array [] will evaluate to true.