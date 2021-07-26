'use-strict'

const Sequelize = require('sequelize');

const model = require('../models/recipesIngredientsModel');

function getRecipesIngredients(receipePartId) {
  return new Promise((resolve, reject) => {
    model.findAll({
      attributes:[
        'receipePartId',
        'order',
        'ingredient',
        'listTerm',
      ],
      where: {
        receipePartId: receipePartId
      }
    }).then(res =>{
      resolve(res);
    }).catch(err => {
      console.log(`Erro ao buscar uma Recipe: ${err};`);
    })
  });
}


function insertRecipesIngredients(data){
  return new Promise((resolve, reject) => {
    let dados = {
      receipePartId: data.receipePartId,
      order: data.order,
      ingredient: data.ingredient,
      listTerm: data.listTerm
    };
    model.create(dados).then(res => {
      // funcao envio de email
      resolve(res);
    }).catch(err => {
      console.log(`Erro ao inserir Recipe: ${err};`);
    })
  });
}

module.exports = {getRecipesIngredients,insertRecipesIngredients};