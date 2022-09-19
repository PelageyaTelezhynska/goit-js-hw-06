const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ingredientsListRef = document.getElementById('ingredients');

const elements = [...ingredients].map(element => {
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = element;
  return item;
});

ingredientsListRef.append(...elements);
console.log(ingredientsListRef);
