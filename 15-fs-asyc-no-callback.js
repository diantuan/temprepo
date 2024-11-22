const {readFile, writeFile} = require('fs').promises;

// simplified 
const start = (path)=>{
  return new Promise((resolve,reject)=>{
    readFile(path, "utf8", (err,data)=>{
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
        
    })
  })
}

// start('./content/first.txt').then(data=>console.log(data)).catch(err=>console.log(err))


//easier and faster way to do it:

const util = require('util');

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const startReadWrite = async()=>{
  console.log('utong')

  try {

    const firstFile = await readFile('./content/first.txt', 'utf8');
    const secondFile = await readFile('content/second.txt', 'utf8');
    console.log(firstFile, secondFile)
  
    writeFilePromise('./content/newsia.txt', 'newsiagoooda,', {flag:'a'})
  }catch(error){
    console.log(error)
  }
 

  console.log('pekpek')
}

startReadWrite()
console.log('suso')
