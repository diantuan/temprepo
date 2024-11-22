// streams 4 types:
//writeable, readable, duplex, transform
//streams also extends emitter/events
//Read operations allow you to handle big data incrementally.

const {createReadStream} = require('fs');


const stream = createReadStream('./content/dede.txt', {encoding: "utf8"})


//default 64kb buffer size
//last buffer - remainder
//highWaterMark - controls the buffer size
//const stream = createReadStream('./content/big.txt', {highWaterMark:90000})
//const stream = createReadStream('./content/big.txt', {encoding: 'utf8'})


stream.on('data', (result)=>{
  console.log(result)})
