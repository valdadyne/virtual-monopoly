import './styles/main.scss';
import debug from 'debug';

const log = debug('app:log');
const ENV = window.process.env;

// The logger should only be enabled if we’re not in production.
if (ENV !== 'production') {
    // Enable the logger.
    debug.enable('*');
    log('Logging is enabled!');
} else {
    debug.disable();
}