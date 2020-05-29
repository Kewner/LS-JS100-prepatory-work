// The && and || logical operators use short-circuit evaluation: if the first
// value is enough to check, the second value won't be checked. 

// These operators return boolean values, but they can also return truthy
// values: the return value is always the value of the operand evaluated last.

(4 === 4) && (5 === 5)  // returns true (5 === 5)
(4 === 3) || 'foo'      // returns 'foo', which would evaluate to true
(3 === '3') && 5        // returns false (3 === '3')


3 & 'foo'       // returns 'foo', which would evaluate to true
'foo' && 3      // returns 3, which would evaluate to true
0 && 'foo'      // returns 0, which would evaluate to false
'foo' && 0      // returns 0, which would evaluate to false

// Operator precedence: 
1. Comparison: <=, <, >, >=
2. Equality: ==, !=
3. Logical AND: &&
4. Logical OR: ||