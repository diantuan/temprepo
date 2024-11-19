//CommonJS, every file in node is a module (by default)
//Modules - encapsulated code (only share minimum)



const names = require('./4-names');
const sayHI = require('./5-utils');
const data = require('./6-alternate-flavor')
require('./7-mind-grenade')

console.log(data);
console.log(names);
sayHI(names.susans);
