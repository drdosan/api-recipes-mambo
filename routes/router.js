'use-strict'

// importanto rotas
const recipes = require('./routerRecipes');
const recipespreps = require('./routerRecipesPreps');
const recipesparts = require('./routerRecipesParts');
const ingredients = require('./routerRecipesIngredients');

// agrupando rotas
const router = [recipes,recipespreps,recipesparts,ingredients];

// exportando as rotas
module.exports = router;