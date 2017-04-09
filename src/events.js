
import eventEmitter from './eventEmitter';

export default (...args) => eventEmitter.emit('showModal', args);
