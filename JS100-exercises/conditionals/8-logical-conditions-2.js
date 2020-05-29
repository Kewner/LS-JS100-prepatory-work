// Predict the output of the following code:

if (true && false) {
  console.log('Yes!');
} else {
  console.log('No...');
}

// This will log 'No...', because the logical AND operator (&&) tells JS that 
// both operands have to evaluate to true, which false does not.