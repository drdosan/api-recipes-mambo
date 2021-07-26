'use-strict'

const Sequelize = require('sequelize');

const model = require('../models/recipesPrepsModel');

function getRecipesPreps(receipePartId) {
  return new Promise((resolve, reject) => {
    model.findAll({
      attributes:[
        'receipePartId',
        'order',
        'prep',
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

function insertRecipesPreps(data){
  return new Promise((resolve, reject) => {
    let dados = {
      receipePartId: data.receipePartId,
      order: data.order,
      prep: data.prep
    };
    model.create(dados).then(res => {
      // funcao envio de email
      resolve(res);
    }).catch(err => {
      console.log(`Erro ao inserir Recipe: ${err};`);
    })
  });
}

module.exports = {getRecipesPreps,insertRecipesPreps};