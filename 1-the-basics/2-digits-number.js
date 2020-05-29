// Use the arithmetic operators to determine the individual digits of a 4-digit
// number like 4936:

// thousands place is 4
// hundreds place is 9
// tens place is 3
// ones place is 6

// Thousands place is 4
(4936 - 936) / 1000

// Hundreds place is 9
(4936 - 36) / 100 % 10

// Tens place is 3
(4936 - 6) / 10 % 10

// Ones place is 6
4936 % 10