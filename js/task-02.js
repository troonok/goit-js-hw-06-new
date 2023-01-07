const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector("#ingredients");
let items =[]
ingredients.forEach(ingredient => {
   const item = document.createElement('li')
   item.className = 'item'
   item.textContent = ingredient;
   items.push(item)
  })

  ingredientsList.append(...items)
