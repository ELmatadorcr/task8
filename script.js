    var recipes = [
      {
        name: "Creamy Spaghetti Carbonara",
        description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
        cuisine: "Italian", difficulty: "Easy", prep: 15, cook: 20, servings: 4, rating: "4.8", reviews: 234,
        image: "../images/carbonara.jpg",
        ingredients: ["400g spaghetti pasta", "200g pancetta or guanciale, diced", "4 large eggs", "100g Pecorino Romano cheese, grated", "50g Parmesan cheese, grated", "Freshly ground black pepper", "Salt for pasta water"],
        instructions: ["Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.", "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.", "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.", "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.", "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.", "Serve immediately with extra cheese and black pepper on top."],
        nutrition: [["Calories", "520 kcal"], ["Protein", "28g"], ["Carbohydrates", "62g"], ["Fat", "18g"], ["Fiber", "3g"], ["Sodium", "680mg"]],
        tips: "Take the pan off the heat before adding the eggs. Save pasta water to make the sauce creamy."
      },
      {
        name: "Crispy Chicken Rice Bowl",
        description: "Golden chicken, fluffy rice, and crunchy vegetables with a bright sesame dressing",
        cuisine: "Asian-inspired", difficulty: "Easy", prep: 15, cook: 25, servings: 2, rating: "4.9", reviews: 186,
        image: "../images/chicken-rice.jpg",
        ingredients: ["2 boneless chicken thighs", "1 cup jasmine rice", "1 cucumber, sliced", "1 carrot, shredded", "2 tbsp soy sauce", "1 tbsp sesame oil", "1 tsp honey", "Sesame seeds and spring onion"],
        instructions: ["Rinse the rice, then cook according to the package directions.", "Mix soy sauce, sesame oil, and honey in a small bowl to make the dressing.", "Season the chicken and cook in a hot pan for 6-7 minutes per side until golden and cooked through.", "Rest the chicken for 5 minutes, then slice into bite-size pieces.", "Divide rice between bowls and arrange the chicken, cucumber, and carrot on top.", "Drizzle with dressing and finish with sesame seeds and spring onion."],
        nutrition: [["Calories", "485 kcal"], ["Protein", "34g"], ["Carbohydrates", "54g"], ["Fat", "14g"], ["Fiber", "5g"], ["Sodium", "720mg"]],
        tips: "Pat the chicken dry before it hits the pan. That small step helps the outside turn golden and crisp instead of steaming."
      },
      {
        name: "Roasted Tomato Basil Pasta",
        description: "Sweet roasted cherry tomatoes folded through pasta with basil and parmesan",
        cuisine: "Italian", difficulty: "Easy", prep: 10, cook: 25, servings: 4, rating: "4.7", reviews: 152,
        image: "../images/tomato-pasta.jpg",
        ingredients: ["350g rigatoni or penne", "500g cherry tomatoes", "3 garlic cloves, thinly sliced", "3 tbsp olive oil", "A handful of fresh basil", "40g Parmesan, grated", "Salt and black pepper"],
        instructions: ["Heat the oven to 220 degrees C. Add tomatoes and garlic to a baking dish with olive oil, salt, and pepper.", "Roast for 20-25 minutes until the tomatoes soften and start to burst.", "Meanwhile, cook the pasta in salted water until just al dente. Save a cup of pasta water.", "Tip the cooked pasta into the tomato dish and toss gently, squashing a few tomatoes to make a sauce.", "Add a splash of pasta water and tear in most of the basil.", "Serve with Parmesan, the remaining basil, and a little black pepper."],
        nutrition: [["Calories", "410 kcal"], ["Protein", "15g"], ["Carbohydrates", "68g"], ["Fat", "10g"], ["Fiber", "6g"], ["Sodium", "490mg"]],
        tips: "Let the tomatoes get a little blistered at the edges. Their concentrated sweetness is what makes this simple sauce sing."
      },
      {
        name: "Smoky Black Bean Tacos",
        description: "Warm spiced beans, creamy avocado, and lime tucked into soft tortillas",
        cuisine: "Mexican", difficulty: "Easy", prep: 12, cook: 15, servings: 4, rating: "4.8", reviews: 203,
        image: "../images/black-bean-tacos.jpg",
        ingredients: ["2 cans black beans, drained", "8 small corn tortillas", "1 tsp ground cumin", "1 tsp smoked paprika", "1 avocado, sliced", "1 lime, cut into wedges", "100g shredded red cabbage", "Fresh coriander and yogurt to serve"],
        instructions: ["Warm a splash of oil in a pan. Add cumin and smoked paprika and stir for 30 seconds.", "Add the black beans and a splash of water. Cook for 8 minutes, lightly mashing some of the beans.", "Warm the tortillas in a dry pan for about 30 seconds on each side.", "Fill each tortilla with the smoky beans and shredded cabbage.", "Top with avocado, coriander, and a spoonful of yogurt.", "Squeeze lime over the tacos and serve straight away."],
        nutrition: [["Calories", "390 kcal"], ["Protein", "16g"], ["Carbohydrates", "58g"], ["Fat", "12g"], ["Fiber", "17g"], ["Sodium", "560mg"]],
        tips: "Mash just a few of the beans while they cook. They thicken the filling and help it stay tucked inside the tortilla."
      },
      {
        name: "One-Pan Lemon Salmon",
        description: "Tender salmon and crisp green vegetables with a quick lemon-garlic glaze",
        cuisine: "Mediterranean", difficulty: "Medium", prep: 10, cook: 18, servings: 2, rating: "4.9", reviews: 128,
        image: "../images/lemon-salmon.jpg",
        ingredients: ["2 salmon fillets", "200g baby potatoes, halved", "150g green beans, trimmed", "1 lemon", "2 tbsp olive oil", "1 garlic clove, minced", "1 tsp dried oregano", "Salt and black pepper"],
        instructions: ["Heat the oven to 210 degrees C. Toss the potatoes with olive oil, oregano, salt, and pepper on a baking tray.", "Roast the potatoes for 12 minutes until they start to soften.", "Mix lemon zest, garlic, and a little olive oil. Brush the mixture over the salmon.", "Add salmon and green beans to the tray. Squeeze over half a lemon.", "Bake for 10-12 minutes, until the salmon flakes easily and the vegetables are tender.", "Serve with the remaining lemon cut into wedges."],
        nutrition: [["Calories", "460 kcal"], ["Protein", "36g"], ["Carbohydrates", "32g"], ["Fat", "21g"], ["Fiber", "6g"], ["Sodium", "390mg"]],
        tips: "Pull the salmon from the oven as soon as it flakes gently in the middle. It will keep cooking for a minute on the hot tray."
      }
    ];

var currentIndex = 0;
var activeTab = "ingredients";
var favorites = {};
var panel = document.getElementById("tab-panel");
var tabs = document.querySelectorAll(".tab");

function showPanel() {
  var recipe = recipes[currentIndex];
  var items = activeTab === "ingredients" ? recipe.ingredients : recipe.instructions;
  var html = "";

  if (activeTab === "ingredients" || activeTab === "instructions") {
    html = activeTab === "ingredients" ? '<ul class="ingredient-list list-group list-group-flush">' : '<ol class="instruction-list list-group list-group-flush">';
    for (var i = 0; i < items.length; i++) {
      html += '<li class="ingredient-item list-group-item"><span class="number">' + (i + 1) + '</span><span>' + items[i] + '</span></li>';
    }
    html += activeTab === "ingredients" ? "</ul>" : "</ol>";
  } else if (activeTab === "nutrition") {
    html = '<div class="nutrition-grid">';
    for (var j = 0; j < recipe.nutrition.length; j++) {
      html += '<div class="nutrition-item"><span class="nutrition-name">' + recipe.nutrition[j][0] + '</span><strong>' + recipe.nutrition[j][1] + '</strong></div>';
    }
    html += "</div>";
  } else {
    html = '<div class="tip-box"><strong>Chef\'s tip:</strong> ' + recipe.tips + "</div>";
  }

  panel.innerHTML = html;
}

function showRecipe() {
  var recipe = recipes[currentIndex];
  document.getElementById("recipe-image").src = recipe.image;
  document.getElementById("recipe-image").alt = recipe.name;
  document.getElementById("rating").textContent = recipe.rating;
  document.getElementById("reviews").textContent = "(" + recipe.reviews + " reviews)";
  document.getElementById("prep-time").textContent = recipe.prep + " min";
  document.getElementById("cook-time").textContent = recipe.cook + " min";
  document.getElementById("servings").textContent = recipe.servings + " people";
  document.getElementById("difficulty").textContent = recipe.difficulty;
  document.getElementById("cuisine").textContent = recipe.cuisine;
  document.getElementById("recipe-title").textContent = recipe.name;
  document.getElementById("description").textContent = recipe.description;
  document.getElementById("favorite-button").classList.toggle("is-favorite", favorites[recipe.name]);
  showPanel();
}

for (var k = 0; k < tabs.length; k++) {
  tabs[k].addEventListener("click", function () {
    activeTab = this.getAttribute("data-tab");
    for (var i = 0; i < tabs.length; i++) tabs[i].classList.remove("active");
    this.classList.add("active");
    showPanel();
  });
}

document.getElementById("another-button").addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % recipes.length;
  activeTab = "ingredients";
  document.getElementById("tab-ingredients").click();
  showRecipe();
});

document.getElementById("favorite-button").addEventListener("click", function () {
  var name = recipes[currentIndex].name;
  favorites[name] = !favorites[name];
  this.classList.toggle("is-favorite", favorites[name]);
});

document.getElementById("share-button").addEventListener("click", function () {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(recipes[currentIndex].name);
    alert("Recipe name copied");
  } else {
    alert(recipes[currentIndex].name);
  }
});

showRecipe();
