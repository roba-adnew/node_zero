import events from 'events';

const eventEmitter = new events.EventEmitter();

function handleEvent() {
    console.log('event handled!')
}

eventEmitter.on('sup', handleEvent);

eventEmitter.emit('sup');
