// A regular expression is a sequence of characters that you use to test
// whether a string matches a given pattern. A sample of their uses:

// - Check whether the string 'Mississippi' contains the substring 'ss'.
// - Print the 3rd word of each sentence from a list of sentences.
// - Replace all instances of 'Mrs' in some text with 'Ms'.
// - Does a string begin with the substring 'St'?
// - Does a string end with the substring 'art'?
// - Does a string contain any non-alphanumeric characters?
// - Replace all non-alphanumeric characters in a string with a hyphen ( - ).

// A regex looks like a string written betwen a pair of characters between / /.
// JS uses RegExp objects to store regex. RegExp objects can invoke methods.


// test() checks if a string argument matches the regex and returns a boolean.
/o/.test('bobcat');  // true
/l/.test('bobcat');  // false

// The boolean value can be used in conditionals:
if (/b/.test('bobcat')) {
  console.log("Yes, it contains the letter 'b'.");
} else {
  console.log("No, it doesn't contain the letter 'b'.");
}


// match() takes a regex as argument and returns an array describing the match.

// No match returns null
'bobcat'.match(/x/);  // null

// Global match (with /g flag) returns array with each matching substring.
'bobcat'.match(/[bct]/g);  // [ 'b', 'b', 'c', 't' ]

// Without the /g flag, it returns an array with additional properties
'bobcat'.match(/[bct]/);   // [ 'b', index: 0, input: 'bobcat' ]

// The first element represents the entire matched part of the string, while
// additional elements (ob and o) represent capture group matches.
// Parentheses inside a regex define capture groups.
'bobcat'.match(/b((o)b)/); // [ 'bob', 'ob', 'o', index: 0, input: 'bobcat' ]

// The return values can be used in conditionals:
function has_a_or_e(string) {
  let results = string.match(/[ae]/g);
  if (results) {
    // a non-null return value from match is truthy
    console.log(`We have a match! ${results}`);
  } else {
    console.log('No match here.');
  }
}

has_a_or_e("basketball"); // We have a match! a,e,a
has_a_or_e("football");   // We have a match! a
has_a_or_e("hockey");     // We have a match! e
has_a_or_e("golf");       // No match here.