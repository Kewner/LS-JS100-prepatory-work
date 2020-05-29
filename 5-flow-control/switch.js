// The switch statement compares a single value against multiple values for
// strict equality, whereas if can test multiple expressions with any condition.

let a = 5;

switch (a) {
  case 5:
    console.log('a is 5');
    break;
  case 6:
    console.log('a is 6');
    break;
  default:
    console.log('a is neither 5, nor 6');
    break;
}

// Without break, execution 'falls through', which is almost always undesirable.
// There are cases where fallthrough is useful, for example when you want to
// execute the same action for two or more cases.

let b = 5;

switch (b) {
  case 5:
  case 6:
  case 7:
    // executed if b is 5, 6, or 7
    console.log('b is either 5, 6, or 7');
    break;
  case 8:
  case 9:
    // executred if b is 8 or 9
    console.log('b is 8 or 9');
    break;
  default:
    // executed if b is anything else
    console.log('b is not 5, 6, 7, 8, or 9');
    break;
}