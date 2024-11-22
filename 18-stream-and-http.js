const fs = require('fs');
const http = require('http');


const server = http.createServer((req,res)=>{
  //const text = fs.readFileSync('./content/dede.txt', 'utf8)
  //res.end(text)

  const fileStream = fs.createReadStream('./content/dede.txt', 'utf8');

  //class fs also extends events so it has the on  method
  fileStream.on("open", ()=>{
    fileStream.pipe(res)
  })
  fileStream.on("error", (err)=>{
    res.end(err)
  })
});

server.listen(5000)
