// import event emitter class 
const eventEmitter = require('events');
// create an instance of event emitter
const emitter = new eventEmitter();

// define an event listener (on)
emitter.on("greet", (name)=>{
    console.log(`Hello ${name} welcome to node js`);
});

// fire an event (emit)
emitter.emit("greet", "Rakib Hossen");

