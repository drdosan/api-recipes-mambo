'use-strict'

const Sequelize = require('sequelize');
const sequery = require('sequelize-raw-query');
const sequelize = new Sequelize('parai574_mambo', 'parai574_mambo', 'Padr@ao321', {
  host:'192.185.217.48',
  port:'3306',
  dialect:'mysql',
  define:{
    timestamps:false
  }
})


const config_db = {
  dialect: 'mysql', // mysql or mssql
  database: 'parai574_mambo',
  username: 'parai574_mambo',
  password: 'Padr@ao321',
  host: '192.185.217.48', // your db host
  port: 3306,
};
sequery.init(config_db);

module.exports = sequelize;