let labels = document.querySelectorAll('label');
labels.forEach((label) => {
  let labelText = label.innerText;
  let delay = 0;
  label.innerText = '';
  for (let letter of labelText) {
    let letterElem = document.createElement('span');
    letterElem.innerText = letter;
    label.append(letterElem);
    letterElem.style.transitionDelay = `${delay}ms`;
    delay += 50;
  }
});
