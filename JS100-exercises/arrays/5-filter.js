// Count the number of elements in scores that are 100 or above.

let scores = [96, 47, 113, 89, 100, 102];

let highScores = scores.filter(score => score >= 100);
console.log(highScores.length);  // logs 3

count = 0;

// LS solution
for (let i = 0; i < scores.length; i += 1) {
  if (scores[i] >= 100) count += 1;
}

console.log(count); // logs 3