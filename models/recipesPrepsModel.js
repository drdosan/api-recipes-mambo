'use-strict'

//chama a conexão com os dados do banco
const db = require('../config/db.js');
//chama a função Sequelize
const type = db.Sequelize;

//construção do modelo da tabela users
let recipesPrepsModel = db.define('RecipePreps',{
  receipePartId: {
    type: type.STRING
  },
  order: {
    type: type.INTEGER
  },
  prep: {
    type: type.STRING
  }
});

// exportação do model da tabela users
module.exports = recipesPrepsModel;