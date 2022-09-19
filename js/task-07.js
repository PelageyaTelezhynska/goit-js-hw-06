const inputRef = document.getElementById('font-size-control');
const textRef = document.getElementById('text');

inputRef.addEventListener('input', onInputChangeFontSize);

function onInputChangeFontSize(event) {
  textRef.style = `font-size: ${inputRef.value}px`;
}
