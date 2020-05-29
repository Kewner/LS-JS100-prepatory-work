// Write code that checks whether the string byteSequence contains the
// character x.

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

console.log(byteSequence.includes('x'));  // logs true

// It's a great exercise to try to implement the functionality of
// String.prototype.includes() yourself.

function includesChar(string, char) {
  for (let i = 0; i < byteSequence.length; i += 1) {
    if (byteSequence[i] === char) {
      return true;
    }
  }
  return false;
}

console.log(includesChar(byteSequence, 'x')); // logs true