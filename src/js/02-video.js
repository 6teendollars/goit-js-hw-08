import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
console.log(player);

    // player.on('play', function() {
    //     console.log('played the video!');
    // });

    // player.getVideoTitle().then(function(title) {
    //     console.log('title:', title);
    // });

    function onProgress({seconds}){
        localStorage.setItem("videoplayer-current-time", seconds);
    }

    player.on('timeupdate', throttle(onProgress, 1000));

    const storedTime = localStorage.getItem("videoplayer-current-time");

    if(storedTime){
        player.setCurrentTime(storedTime)
    }
