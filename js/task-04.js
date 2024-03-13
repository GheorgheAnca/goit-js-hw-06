let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueDisplay = document.getElementById('value');

function updateDisplay() {
  valueDisplay.textContent = counterValue;
}

function handleButtonClick(action) {
  if (action === 'decrement') {
    counterValue--;
  } else if (action === 'increment') {
    counterValue++;
  }
  updateDisplay();
}

decrementButton.addEventListener('click', () => {
  handleButtonClick('decrement');
});

incrementButton.addEventListener('click', () => {
  handleButtonClick('increment');
});

updateDisplay();