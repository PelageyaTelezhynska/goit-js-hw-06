const input = document.getElementById('name-input');
const name = document.getElementById('name-output');

input.addEventListener('input', makeGreeting);

function makeGreeting(event) {
  name.textContent = event.currentTarget.value;
  if (name.textContent === '') {
    name.textContent = 'Anonymous';
  }
}
