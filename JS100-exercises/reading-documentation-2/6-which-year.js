// The MDN page for Date lists two methods to get the year of a date.

// What is the difference between the two methods and which one should you use?
// You should use .getFullYear():

let today = new Date();

today.getYear();  // 120
// Returns the year (usually 2–3 digits) in the specified date according to
// local time. Use getFullYear() instead.

today.getFullYear();  // 2020
// Returns the year (4 digits for 4-digit years) of the specified date
// according to local time.