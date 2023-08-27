const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulList = document.querySelector("#ingredients");

const liElements = ingredients.map((ingredientText) => {
  const li = document.createElement("li");
  li.textContent = ingredientText;
  li.classList.add("item");
  return li;
});

ulList.append(...liElements);
