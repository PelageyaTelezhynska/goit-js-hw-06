const inputRef = document.getElementById('validation-input');
const validLength = inputRef.dataset.length;

inputRef.addEventListener('blur', onCheckInputValidLength);

function onCheckInputValidLength(event) {
  if (event.currentTarget.value.length >= validLength) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
}
