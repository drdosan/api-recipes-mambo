'use-strict'

//chama a conexão com os dados do banco
const db = require('../config/db.js');
//chama a função Sequelize
const type = db.Sequelize;

//construção do modelo da tabela users
let recipesPartsModel = db.define('RecipeParts',{
  receipePartId: {
    type: type.STRING
  },
  recipeId: {
    type: type.INTEGER
  },
  partOrderId: {
    type: type.INTEGER
  },
  title: {
    type: type.STRING
  },
  type: {
    type: type.STRING
  }
});

// exportação do model da tabela users
module.exports = recipesPartsModel;