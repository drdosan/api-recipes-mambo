'use-strict'

//chama a conexão com os dados do banco
const db = require('../config/db.js');
//chama a função Sequelize
const type = db.Sequelize;

//construção do modelo da tabela users
let recipesIngredientsModel = db.define('RecipeIngredients',{
  receipePartId: {
    type: type.STRING
  },
  order: {
    type: type.INTEGER
  },
  ingredient: {
    type: type.STRING
  },
  listTerm: {
    type: type.STRING
  }
});

// exportação do model da tabela users
module.exports = recipesIngredientsModel;