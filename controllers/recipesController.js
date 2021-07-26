'use-strict'

const Sequelize = require('sequelize');
const sequery = require('sequelize-raw-query');
const model = require('../models/recipesModel');
const modelIngredients = require('../models/recipesIngredientsModel');
const modelParts = require('../models/recipesPartsModel');
const modelPreps = require('../models/recipesPrepsModel');

async function getPreps(receipePartId) {
  const result =  await modelPreps.findAll({
    attributes:[
      'receipePartId',
      'order',
      'prep',
    ],
    where: { receipePartId: receipePartId },
    order: [['order', 'ASC']]
  });
  const parts = await result.map(async objParts => {
    return {
      "order": objParts.order,
      "prep": objParts.prep,
    };
  });
  return Promise.all(parts);
}
async function getIngredients(receipePartId) {
  const result =  await modelIngredients.findAll({
    attributes:[
      'receipePartId',
      'order',
      'ingredient',
      'listTerm',
    ],
    where: { receipePartId: receipePartId },
    order: [['order', 'ASC']]
  });

  const parts = await result.map(async objParts => {
    return {
      "order": objParts.order,
      "ingredient": objParts.ingredient,
      "listTerm": objParts.listTerm,
    };
  });
  return Promise.all(parts);
}
async function getParts(recipeId) {
  const result =  await modelParts.findAll({
    attributes:[
      'receipePartId',
      'recipeId',
      'partOrderId',
      'title',
      'type',
    ],
    where: { recipeId: recipeId },
    order: [['partOrderId', 'ASC']]
  });
  const parts = await result.map(async objParts => {
    if(objParts.type == 'Preparo') {
      const Preps = await getPreps(objParts.receipePartId);
      return {
        "receipePartId": objParts.receipePartId,
        "partOrderId": objParts.partOrderId,
        "title": objParts.title,
        "type": objParts.type,
        "Preps": Preps,
      };
    }
    if(objParts.type == 'Ingredientes') {
      const Ingredients = await getIngredients(objParts.receipePartId);
      return {
        "receipePartId": objParts.receipePartId,
        "partOrderId": objParts.partOrderId,
        "title": objParts.title,
        "type": objParts.type,
        "Ingredients": Ingredients,
      };
    }
  });
  return Promise.all(parts);
}
async function getRecipe(recipeId) {
  const recipes = await model.findAll({
    where: {
      recipeId: recipeId
    }
  });
  const dados = recipes.map(async obj => {
    let resultParts = await getParts(recipeId);
    return {
      "recipeId": obj.recipeId,
      "title": obj.title,
      "subtitle": obj.subtitle,
      "details": obj.details,
      "servings": obj.servings,
      "totalTimeInMinutes": obj.totalTimeInMinutes,
      "occasions": obj.occasions,
      "parts": resultParts,
    }
  });
  return Promise.all(dados);
}
async function listRecipes(data) {
  let where = '';

  if(data.type) {
    if(data.type == 'all') {
      where += "AND (RecipeParts.type='Ingredientes' AND RecipeParts.receipePartId=RecipeIngredients.receipePartId AND RecipeIngredients.listTerm LIKE '%"+data.term+"%' OR Recipes.occasions LIKE '%"+data.term+"%')";
    }
    if(data.type == 'ingredient') {
      where += "AND RecipeParts.type='Ingredientes' AND RecipeParts.receipePartId=RecipeIngredients.receipePartId AND RecipeIngredients.listTerm LIKE '%"+data.term+"%'";
    }
    if(data.type == 'occasion') {
      where += "AND Recipes.occasions LIKE '%"+data.term+"%'";
    }
  }


  const result = await sequery.exec(`SELECT Recipes.* FROM Recipes, RecipeParts, RecipeIngredients WHERE Recipes.recipeId=RecipeParts.recipeId `+where+` GROUP BY Recipes.recipeId ORDER BY Recipes.recipeId ASC LIMIT `+data.init+`,`+data.limit);
  return result;
}
async function addIngredients(recipeId) {
  let where = '';
  const result = await sequery.exec(`SELECT RecipeIngredients.* FROM RecipeParts, RecipeIngredients WHERE RecipeParts.recipeId=`+recipeId+` AND RecipeParts.type='Ingredientes' AND RecipeParts.receipePartId=RecipeIngredients.receipePartId ORDER BY RecipeIngredients.order ASC`);
  return result;
}

module.exports = {getRecipe,listRecipes,addIngredients};