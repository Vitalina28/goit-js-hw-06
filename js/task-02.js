const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listEl = document.querySelector('#ingredients');

  

  ingredients.forEach(element => {
  const itemEl = document.createElement('li');
  itemEl.textContent = element;
  itemEl.classList.add("item");
    console.log(itemEl);
    
    listEl.appendChild(itemEl);
});
