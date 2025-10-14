const boxes = document.querySelectorAll('.box');

const windowHeight = document.documentElement.clientHeight;

const triggerPoint = windowHeight - 120;

checkBoxes();

window.addEventListener('scroll', checkBoxes)

function checkBoxes() {
    for (let box of boxes) {
        let boxTop = box.getBoundingClientRect().top
        if (boxTop < triggerPoint) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    }
}