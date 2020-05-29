// Write a function that takes an ISO 639-1 language code and returns a
// greeting in that language. You can take the examples below or add whatever
// languages you like.

greet('en'); // 'Hi!'
greet('fr'); // 'Salut!'
greet('pt'); // 'Olá!'
greet('de'); // 'Hallo!'
greet('sv'); // 'Hej!'
greet('af'); // 'Haai!'
greet('nl'); // 'Eeeh..'

function greet(iso) {
  switch(iso) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
    default: return 'Eeeh..';
  }
}