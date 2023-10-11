const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listEl = document.querySelector('#ingredients');  

const elements = ingredients.map(element => {
  const itemEl = document.createElement('li');
  itemEl.textContent = element;
  itemEl.classList.add("item");
    
  return itemEl;
});
console.log(elements);

listEl.append(...elements);