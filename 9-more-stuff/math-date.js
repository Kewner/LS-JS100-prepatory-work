// The Math object provides a collection of methods and values that you can use
// without a complete understanding of how they work mathematically.

Math.sqrt(36);  // returns 6
Math.sqrt(2);   // returns 1.4142135623730951

Math.PI;  // returns 3.141592653589793

// The Date constructor creates objects that represent a time and date. The
// objects provide methods that let you work with those values.

let date = new Date('September 2, 1986');
date.getDay();  // returns 2 (monday)

// A function to get the name of the day:
function getDayOfWeek(date) {
  let daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return daysOfWeek[date.getDay()];
}

console.log(getDayOfWeek(date));  // logs Tuesday