function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const backgroundRef = document.querySelector('body');
const btnRef = document.querySelector('.change-color');
const colorRef = document.querySelector('.color');

btnRef.addEventListener('click', onChangeBackgroundColor);

function onChangeBackgroundColor(event) {
  const newColor = getRandomHexColor();
  colorRef.textContent = `${newColor}`;
  backgroundRef.style = `background-color: ${newColor}`;
}
