function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const createBtn = document.querySelector('#controls button[data-create]');
const destroyBtn = document.querySelector('#controls button[data-destroy]');
const input = document.querySelector('#controls input');
const boxes = document.querySelector('#boxes');
createBtn.addEventListener('click', onButtonClick);
destroyBtn.addEventListener('click', destroyBoxes);

function onButtonClick(event) {
  boxes.innerHTML = "";
  if (input.value >= 1 && input.value <= 100)
  for (let i = 0; i < input.value; i++) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = 30 + i * 10 + "px";
    box.style.height = 30 + i * 10 + "px";
    boxes.append(box);
  }
  input.value = "";
}

function destroyBoxes(event) {
  boxes.innerHTML="";
}