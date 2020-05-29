// Add a qux property with value 3 to the myObj object we created in the previous
// exercise. Now, examine the following code snippets:

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

Object.keys(myObj).forEach(function(key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}

// Without running this code, can you determine whether these two snippets
// produce the same output? Why?

// The first snippet will log qux, the second snippet will log qux, foo and bar.
// The for/in loop also iterates over inherited properties, while Object.keys
// doesn't.