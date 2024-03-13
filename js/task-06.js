const inputElement = document.getElementById('validation-input');
const dataLength = inputElement.getAttribute('data-length');

if (Number.isInteger(Number(dataLength)) && Number(dataLength) > 0) {
  inputElement.addEventListener('blur', function() {
    const inputValue = this.value.trim();
    const inputLength = inputValue.length;

    if (inputLength === Number(dataLength)) {
      inputElement.classList.add('valid');
      inputElement.classList.remove('invalid');
    } else {
      inputElement.classList.add('invalid');
      inputElement.classList.remove('valid');
    }
  });
} else {
  console.error('Valoarea atributului "data-length" nu este un număr întreg pozitiv.');
}