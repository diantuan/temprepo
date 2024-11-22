//event loop is what allows node.js to perform nonblocking i/o operation by OFFLOADING operations

// setInterval(()=>{
//   console.log('gello worls')
// }, 2000)

console.log("is this gonna run first?")

//process stays alive unless
//kill process with ctrl C
//unexpected error

const http = require('http')

const serva = http.createServer((req, res)=>{
  console.log('req')
  res.end('hellost')
})


//listen is async and sends request everytime the localhost page refreshes
serva.listen(5000, ()=>{
  console.log('server is listening on port 5000')
})