function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector('.change-color');
const bodyElem = document.querySelector('body');
const spanElem = document.querySelector('.color');
changeColorButton.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
  spanElem.textContent = getRandomHexColor();
  bodyElem.style.backgroundColor = spanElem.textContent;
}
