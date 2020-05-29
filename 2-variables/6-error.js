// Will this program produce an error when run? Why or why not?

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// It will not. Const variables cannot be reassigned, but the second const
// variable is declared inside another code block, so it's a different variable.