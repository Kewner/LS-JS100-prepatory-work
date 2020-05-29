// Write code that capitalizes the words in the string
// 'launch school tech & talk', so that you get the string
// 'Launch School Tech & Talk'.

let string = 'launch school tech & talk';

function capitalizeFirstChar(string) {
  let spl = string.split(' ');
  
  for (let i = 0; i < spl.length; i += 1) {
    spl[i] = spl[i].replace(spl[i][0], spl[i][0].toUpperCase());
  }

  return spl.join(' ');
}

console.log(capitalizeFirstChar(string));

// LS solution:
let string1 = 'launch school tech & talk';
let words = string1.split(' ');
let capitalizedWords = [];
let i;

for (i = 0; i < words.length; i++) {
  let word = words[i];

  capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
}

capitalizedWords.join(' '); // 'Launch School Tech & Talk'