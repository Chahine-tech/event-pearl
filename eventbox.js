const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

function empty() {

    eventEmitter.on('hi', () => {
        console.log('Chopper')    
    })
    eventEmitter.emit('hi')
    
}
function withArgs(names) {
    const emitter = new EventEmitter()
    
    emitter.on('newFellow', (name) => {
      console.log(`Here com's a new pirate ->> ${name}`)
    })
  
    names.forEach(
      (name) => emitter.emit('newFellow', name),
    )
  }
  
  module.exports = {
    empty,
    withArgs,
  }  
