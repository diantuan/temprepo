// npm - global command, comes with node installed
// npm --version

//2 types of install:

//local dependency - use it only in this particular project
// npm install(or i for short) <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)


//package.json - manifest file (stores important info about project/packege)
//3 methods on how to create:
//manual approach (create package.json in the root, create properties etc.)
//npm init (step by step asking of questions, press enter to skip)
//npm init -y (everything default)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flatMapDeep(items)
console.log(newItems)