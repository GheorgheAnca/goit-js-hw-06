function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonElement = document.querySelector('.change-color');
const spanElement = document.querySelector('.color');

buttonElement.addEventListener('click', function() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  spanElement.textContent = newColor;
});
