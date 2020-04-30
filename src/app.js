import './styles/main.scss';
import debug from 'debug';
import * as dotenv from  'dotenv';
dotenv.config();

const log = debug('app:log');
const ENV = window.process.env;

// The logger should only be disabled if we’re not in production.
if (ENV !== 'production') {
    // Enable the logger.
    debug.enable('*');
    log('Logging is enabled!');
    // Enable LiveReload
    document.write(
        '<script src="http://' + (location.host || 'localhost').split(':')[0] +
        ':35729/livereload.js?snipver=1"></' + 'script>'
    );
} else {
    debug.disable();
}