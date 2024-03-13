const inputElement = document.getElementById('font-size-control');
const textElement = document.getElementById('text');

inputElement.addEventListener('input', function() {
  textElement.style.fontSize = `${this.value}px`;
});
console.log(inputElement, textElement);