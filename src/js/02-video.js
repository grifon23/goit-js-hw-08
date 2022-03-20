import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
player.on(
  'timeupdate',
  throttle(currentTime => {
    localStorage.setItem('videoplayer-current-time', currentTime.seconds);
  }, 1000),
);
const storage = localStorage.getItem('videoplayer-current-time');
const setCurrentTime = () => {
  if (!storage) return;
  player.setCurrentTime(storage);
};

setCurrentTime();
