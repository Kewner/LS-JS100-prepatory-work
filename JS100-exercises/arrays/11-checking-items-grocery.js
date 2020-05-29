// We have made a grocery list, and as we check off items on that list, we would
// like to remove them.

// Write code that removes the items from 'groceryList' one by one, until it is
// empty. If you log the elements you remove, the expected behavior would look as
// follows.

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// Your code.

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

for (let i = groceryList.length; i > 0; i -= 1) {
  console.log(groceryList.shift());
}

groceryList; // []

// LS solution:
while (groceryList.length > 0) {
  let checkedItem = groceryList.shift();

  console.log(checkedItem);
}