const EventEmitter = require('events');
//returns a class


//create class instance/object
const customEmitter = new EventEmitter();


//has on and emit methods. on listens, needs to be before emit
customEmitter.on('sample', ()=>{
  console.log("listened to sample")
})

customEmitter.emit('sample');


const http = require('http');

//default-needs callback: const server = http.createServer((req,res)=>{res.end('welcome)})
const server = http.createServer();


//server has a method "on" that listens to a "request" event
server.on('request', (req,res)=>{
  res.end('Welcome')
})
//why?? because... class Server extends EventEmitter
//a lot of built in modules rely on events

server.listen(5000);