const http = require('http');
const fs = require('fs');

const indexHTML = fs.readFileSync('./public/index.html', 'utf8')
const stylesCSS = fs.readFileSync('./public/styles.css', 'utf8')
const indexJS = fs.readFileSync('./public/index.js', 'utf8')

const server = http.createServer((req, res)=>{

  //aboutpage
  if(req.url==="/"){
  res.writeHead(200, {'content-type':'text/html'})
   res.write(indexHTML)
   res.end();
  }
  else if(req.url==="/styles.css"){
    res.writeHead(200, {'content-type':'text/css'})
    res.write(stylesCSS)
    res.end()
  }
  else if(req.url==="/index.js"){
    res.writeHead(200, {'content-type':'text/javascript'})
    res.write(indexJS)
    res.end()
  }
  else if(req.url==='/about'){
   res.writeHead(200, {'content-type':'text/html'})
   res.write('<h1>About</h1>')
   res.end();

  }else if(req.url==="/contact"){
    res.writeHead(200, {'content-type':'text/html'})
    res.write('<h1>Contact</h1>')
    res.end()

  }else{
    res.writeHead(404, {'content-type':'text/plain'})
    res.end('error 404 bitch')
  }

  
    
});



server.listen(8080)