
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = ingredients.map(option => {

const navItemEl = document.createElement('li');
navItemEl.classList.add('item');
navItemEl.textContent = `${option}`;

return navItemEl;
})

const navEl = document.querySelector('#ingredients');
console.log(navEl);
navEl.append(...elements);

