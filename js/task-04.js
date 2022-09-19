const btnIncrementRef = document.querySelector('[data-action="decrement"]');
const btnDecrementRef = document.querySelector('[data-action="increment"]');
const value = document.getElementById('value');

let counterValue = 0;

btnDecrementRef.addEventListener('click', decrement);
btnIncrementRef.addEventListener('click', increment);

function increment() {
  counterValue -= 1;
  value.textContent = counterValue;
}

function decrement() {
  counterValue += 1;
  value.textContent = counterValue;
}
