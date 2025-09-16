let prev = document.getElementById('prev');
let next = document.getElementById('next');
let progressLine = document.getElementById('progress');
let progressContainer = document.querySelector('.progress-container');
let circles = document.querySelectorAll('.circle');
let progressContainerWidth = parseFloat(
  getComputedStyle(progressContainer).width
);
let step = (1 * progressContainerWidth) / 3;
let currentStep = 0;
let maxSteps = circles.length - 1;

next.addEventListener('click', function () {
  if (currentStep < maxSteps) {
    currentStep++;
    progressLine.style.width = Math.round(step * currentStep) + 'px';
    circles[currentStep].classList.add('active');
  }
  prev.disabled = currentStep === 0;
  next.disabled = currentStep === maxSteps;
});

prev.addEventListener('click', function () {
  if (currentStep > 0) {
    currentStep--;
    progressLine.style.width = Math.round(step * currentStep) + 'px';
    circles[currentStep + 1].classList.remove('active');
  }
  prev.disabled = currentStep === 0;
  next.disabled = currentStep === maxSteps;
});
