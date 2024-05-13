const eventsEmitter = require('events')

const customEmitter = new eventsEmitter
customEmitter.on('response', ()=>{
    console.log(`data received`)
})
customEmitter.emit('response')
