//destructure right away the method u need
//const fs = require('fs) if not destructured
const {readFileSync, writeFileSync} = require('fs');

console.log('start')

//takes in a path
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')



console.log(first, second);

writeFileSync('./content/result-syncBuiltinESMExports.txt', `here is the result: ${first}`, {flag: 'a'})

console.log('done with this task');
console.log('starting the next one');