// How can we refactor the invocation of the function formatName (without
// changing the function definition) so that we don't need to grab each
// element of the array fullName by index?

function formatName(firstName, middleName, lastName) {
  return `${lastName}, ${firstName} ${middleName[0]}.`;
}

fullName = ['James', 'Tiberius', 'Kirk'];

console.log(formatName(...fullName)); // logs Kirk, James T.

// The parameter ...fullname uses the spread operator (...) to expand
// the array into a number of arguments.

let fullName1 = [...fullName];  // makes a copy of fullName array
console.log(fullName1); // logs ['James', 'Tiberius', 'Kirk']