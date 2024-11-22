const http = require('http');

const server = http.createServer((req, res)=>{
  if(req.url=== '/'){
    res.end('Welcome to our home page')
  }
  if(req.url === '/about')
  {
    res.end('about page')
  }
  res.end(`
    <h1>Oops!</h1>
    <p>we cant seem to fint the page beh </p>
    <a href='/'>go home</a>
    `)
  
  
})

server.listen(5000);

//callback when the server is ready

// server.listen(5000, ()=>{

// })