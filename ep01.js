const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

function empty() {

    eventEmitter.on('start', () => {
        console.log('hi')    
    })
    eventEmitter.emit('start')
    
}
empty()
