let str = 'Pete Hanson';
let names = str.toUpperCase().split(' ').reverse().join(', ');

console.log(names); // logs HANSON, PETE

// toUpperCase() turns 'Pete Hanson' into 'PETE HANSON'
// split(' ') turns 'PETE HANSON' into ['PETE', 'HANSON']
// reverse() turns ['PETE', 'HANSON'] into ['HANSON', 'PETE']
// join(', ') turns ['HANSON', 'PETE'] into 'HANSON, PETE'