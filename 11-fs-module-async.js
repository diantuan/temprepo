//async
const {readFile, writeFile} = require('fs');


console.log('start')
//callback hell

readFile('./content/first.txt','utf8' , (err, result)=>{
  if(err){
    return
  }
  const first = result;
  readFile('./content/second.txt', 'utf8', (err, result)=>{
    if(err){
      
      return
    }
    const second = result;

    //ps: this doesnt work without a callback
    writeFile('./content/result-async.txt' , `here is the result: ${first}, ${second}`, (err,result)=>{
      if(err){
        
        return
      }
      console.log('done with this task')
    }
  )
  })
})

console.log('starting next task')



