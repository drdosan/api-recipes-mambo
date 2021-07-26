'use-strict'

const Sequelize = require('sequelize');

const model = require('../models/recipesPartsModel');

function getRecipesParts(receipePartId) {
  return new Promise((resolve, reject) => {
    model.findAll({
      attributes:[
        'receipePartId',
        'recipeId',
        'partOrderId',
        'title',
        'type',
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

function listRecipesParts(recipeId) {
  return new Promise((resolve, reject) => {
    model.findAll({
      attributes:[
        'receipePartId',
        'recipeId',
        'partOrderId',
        'title',
        'type',
      ],      
      where: {
        recipeId: recipeId
      }
    }).then(res =>{
      resolve(res);
    }).catch(err => {
      console.log(`Erro ao buscar uma Recipe: ${err};`);
    })
  });
}


function insertRecipesParts(data){
  return new Promise((resolve, reject) => {
    let dados = {
      receipePartId: data.receipePartId,
      recipeId: data.recipeId,
      partOrderId: data.partOrderId,
      title: data.title,
      type: data.type
    };
    model.create(dados).then(res => {
      // funcao envio de email
      resolve(res);
    }).catch(err => {
      console.log(`Erro ao inserir Recipe: ${err};`);
    })
  });
}

module.exports = {getRecipesParts,insertRecipesParts,listRecipesParts};