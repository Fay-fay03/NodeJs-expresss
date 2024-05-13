const {readFileSync, writeFileSync} = require("fs")

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//console.log(first, second)

writeFileSync(
    './content/result.txt', 
    `Here is your created file: ${first}, ${second}`,
    //{flag: 'a'}

)

