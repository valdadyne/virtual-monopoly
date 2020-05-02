/* eslint-disable no-console */

const game = () => {
    // set the screen to fullscreen
    window.document.addEventListener('DOMContentLoaded', () => {
        document.documentElement.requestFullscreen();
        screen.orientation.lock("portrait-primary");
    }, false);
}

export default game;