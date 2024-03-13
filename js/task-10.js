function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElement = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesElement = document.querySelector('#boxes');

createButton.addEventListener('click', () => {
  const amount = inputElement.value;
  createBoxes(amount);
});
destroyButton.addEventListener('click', () => {
  boxesElement.innerHTML = '';
  inputElement.value = '';
});
function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesElement.appendChild(box);
  }
}