'use-strict'

//chama a conexão com os dados do banco
const db = require('../config/db.js');
//chama a função Sequelize
const type = db.Sequelize;

//construção do modelo da tabela users
let recipesModel = db.define('Recipes',{
  recipeId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: type.INTEGER
  },
  title: {
    type: type.STRING
  },
  subtitle: {
    type: type.STRING
  },
  details: {
    type: type.STRING
  },
  servings: {
    type: type.INTEGER
  },
  totalTimeInMinutes: {
    type: type.INTEGER
  },
  occasions: {
    type: type.STRING
  }
});

// exportação do model da tabela users
module.exports = recipesModel;