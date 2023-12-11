const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
    console.log('Please Turn Off Motor');
    setTimeout(() =>{
        console.log('Please turn off the motor! Its a gentle remonder');
    },3000)
    
});

console.log('the script is running');
myEmitter.emit('WaterFull');