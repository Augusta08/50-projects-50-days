const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;
let blurValue;
let opacityValue;

let timerId = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(timerId);
  }
  console.log(load);
  loadText.innerText = `${load}%`;

  opacityValue = 1 - load / 100;
  blurValue = 30 - 0.3 * load;

  loadText.style.opacity = `${opacityValue}`;
  bg.style.filter = `blur(${blurValue}px)`;
}
