
const formElement = document.querySelector('.login-form');

formElement.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(formElement);
  const formObject = {};

  for (const [name, value] of formData.entries()) {
    if (value === '') {
      alert('Toate câmpurile trebuie completate.');
      return;
    }
    formObject[name] = value;
  }

  console.log(formObject);
  formElement.reset();
});