const path = require('path')

console.log(path.sep)

const filepath = path.join('/Node,Express tutorial', 'node', 'app.js')
console.log(filepath)

const absolute = path.resolve(__dirname, 'Node,Express tutorial', 'node', 'app.js')
console.log(absolute)

const os = require('os');

const user = os.userInfo()
console.log (user)

console.log(`The system uptime: ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}
console.log(currentOs)