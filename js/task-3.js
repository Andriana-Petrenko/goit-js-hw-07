const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', event => {
  const userName = event.target.value.trim();
  nameOutput.textContent = userName === '' ? 'Anonymous' : userName;
});

