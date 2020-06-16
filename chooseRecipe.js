const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  let recipeName = "";
  for (recipe of recipes) {
    let ingredients = recipe.ingredients;
    console.log(ingredients);
    let ingrBakeryA =
      bakeryA.includes(ingredients[0]) || bakeryA.includes(ingredients[1]);
    let ingrBakeryB =
      bakeryB.includes(ingredients[0]) || bakeryB.includes(ingredients[1]);
    if (ingrBakeryA && ingrBakeryB) {
      recipeName = recipe.name;
    }
  }
  return recipeName;

  //   for (nameFirst of ingredientCheck(bakeryA, recipes)) {
  //     for (nameSecond of ingredientCheck(bakeryB, recipes)) {
  //       if (nameFirst === nameSecond) {
  //         return nameSecond;
  //       }
  //     }
  //   }
  // };

  // const ingredientCheck = function (bakery, recipes) {
  //   let recipeName = [];
  //   for (let i = 0; i < bakery.length; i++) {
  //     for (let y = 0; y < recipes.length; y++) {
  //       if (
  //         bakery[i] === recipes[y].ingredients[0] ||
  //         bakery[i] === recipes[y].ingredients[1]
  //       ) {
  //         recipeName.push(recipes[y].name);
  //       }
  //     }
  //   }
  //   return recipeName;
};

let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
let bakeryB = ["milk", "butter", "cream cheese"];
let recipes = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"],
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"],
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ["potatoes", "bay leaf", "raisins"];
bakeryB = ["red bean", "dijon mustard", "apples"];
recipes = [
  {
    name: "Potato Ganache",
    ingredients: ["potatoes", "chocolate"],
  },
  {
    name: "Sweet Fish",
    ingredients: ["anchovies", "honey"],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ["dijon mustard", "raisins"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
