// Take your code from the previous Check the Weather exercise and rewrite it
// as a switch statement. Feel free to add more cases besides 'sunny' and
// 'rainy'.

let rlSync = require('readline-sync');
let weather = rlSync.question("How's the weather? ");

switch (weather) {
  case ('sunny'):
    console.log("It's a beautiful day!");
    break;
  case ('rainy'):
    console.log("Grab your umbrella.");
    break;
  case ('foggy'):
    console.log("Not a good time to drive!");
    break;
  default:
    console.log("Let's stay inside.");
}