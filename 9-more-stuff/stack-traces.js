// TypeError: Cannot read property 'length' of undefined
//     at names.forEach (repl:2:42)
//     at Array.forEach (<anonymous>)

// This error message is a stack trace: it reports the type of error that
// occured, where it occured and how it got there.

function foo() {
  console.log(bar);
}

foo();

// ReferenceError: bar is not defined
//     at foo (C:\LS_JS-intro\9-more-stuff\stack-traces.js:9:15)
//     at Object.<anonymous> (C:\LS_JS-intro\9-more-stuff\stack-traces.js:12:1)

// - JS raises a ReferenceError because the variable bar doesn't exist.
// - JS detected the error at character 15 on line 9.
// - We called foo on line 12 from an anonymous function - this is because the
//   trace treats code at the global level as belonging to an anonymous function.