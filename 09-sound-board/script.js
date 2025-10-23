let sounds = document.querySelectorAll('audio');
let buttons = document.querySelectorAll('.btn');

let currentAudio = null;

buttons.forEach((button, idx) => {
  button.addEventListener('click', () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    sounds[idx].play();
    currentAudio = sounds[idx];
  });
});
