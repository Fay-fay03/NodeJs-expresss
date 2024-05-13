const {readFile, writeFile} = require('fs')
console.log("starting")
readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
   const first = result;
   readFile('./content/second.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const second = result

    writeFile('./content/result-async.txt',
        `Here is your text file: ${first}, ${second}`,
        (err, result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
            console.log('Done with the task')
        }
    )
   })
})
console.log("starting new task")



