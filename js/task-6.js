function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const createBoxBtn = document.querySelector('#controls button[data-create]');
const destroyBoxBtn = document.querySelector('#controls button[data-destroy]');
const input = document.querySelector('#controls input');
const boxes = document.querySelector('#boxes');
createBoxBtn.addEventListener('click', createBoxes);
destroyBoxBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const inputNumber = Number(input.value);
  if (inputNumber>= 1 && inputNumber<= 100) {
    boxes.innerHTML = '';
  for (let i = 0; i < inputNumber; i++) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = 30 + i * 10 + 'px';
    box.style.height = 30 + i * 10 + 'px';
    boxes.append(box);
    }
    input.value = '';
  }
}

function destroyBoxes() {
  boxes.innerHTML='';
}
