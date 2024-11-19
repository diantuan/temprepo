const path = require('path');

//separator
console.log(path.sep)


//join
const filePath = path.join('/content/', 'subfolder', 'test.txt')

console.log(filePath);


//basename - last file
const base = path.basename(filePath)
console.log(base)

//returns the absolute path
const absolute = path.resolve(__dirname, 'content', 'subfoler', 'test.txt');

console.log(absolute)

console.log(__dirname)

