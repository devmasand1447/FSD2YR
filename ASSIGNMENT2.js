const EventEmitter = require('events');

const studentEmitter = new EventEmitter();

studentEmitter.on('login', () => {
    console.log('Student logged successfully');
});

studentEmitter.on('Assignment', () => {
    console.log('Assignment Submitted');
});

studentEmitter.on('logout', () => {
    console.log('Student logged out');
});

studentEmitter.on('Exit', () => {
    console.log('exiting application');
});

console.log("--- Executing Student Activity Monitoring System ---");

studentEmitter.emit('login');
studentEmitter.emit('Assignment');
studentEmitter.emit('logout');
studentEmitter.emit('Exit');m 
