const categoriesRef = document.getElementById("categories");
const categoriesList = categoriesRef.children;
console.log(`Number of categories: ${[...categoriesList].length}`);

[...categoriesList].map((list) => {
  const categorie = list.firstElementChild.textContent;
  console.log(`Category: ${categorie}`);
  const values = list.getElementsByTagName("li");
  console.log(`Elements: ${[...values].length}`);
});
