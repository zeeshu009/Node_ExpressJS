//built in events i.e open,close
const fs = require('fs')

const myRead = fs.createReadStream('./text.txt')


myRead.on('open',()=>{
    console.log("text.txt is opened")
})

//my customize event listener


const event = require('events')

const eventEmitter = new event.eventEmitter();

eventEmitter.on('play',(type) =>{
    console.log(`I'm Playing ${type}`)
})

// now trigger the customize event 

eventEmitter.emit('play','football')
