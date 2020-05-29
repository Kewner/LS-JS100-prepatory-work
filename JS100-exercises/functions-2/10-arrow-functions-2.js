// The function initGame below returns an object. Refactor it using arrow
// function syntax.

// let initGame = function () {
//   return {
//     level: 1,
//     score: 0
//   }
// };

// MDN on arrow functions: parenthesize the body of a function to return an
// object literal expression:
let initGame = () => ({level: 1, score: 0});

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);