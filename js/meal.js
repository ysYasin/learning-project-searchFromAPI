const loadfood = (food) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`)
    .then((res) => res.json())
    .then((data) => placingCard(data.meals));
};
const placingCard = (meals) => {
  const mealsContainer = document.getElementById("card-container");
  mealsContainer.innerHTML = "";
  meals.forEach((meal) => {
    console.log(meal);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div class="card">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 190)}</p>
      </div>
  </div>
    `;
    mealsContainer.appendChild(div);
  });
};
document.getElementById("Search").addEventListener("click", () => {
  const search = document.getElementById("search-value");
  const searchValue = search.value;
  search.setAttribute("placeholder", searchValue);
  console.log(searchValue);
  loadfood(searchValue);
  search.value = "";
});
