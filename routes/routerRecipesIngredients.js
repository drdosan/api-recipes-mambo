'use-strict'

// importando as requisições do server
const router = require('../config/server.js').server;
// importando o Controller de usuários
const controller = require('../controllers/recipesIngredientsController');


// rota para inserir Cliente
router.post('/v1/ingredients/create', (req, res, next) => {
  controller.insertRecipesIngredients(req.body).then(data => {
    // pegando o id do usuário
      res.send(200, data);
  }).catch(err => {
    res.send(503, err);
  })
  next();
});

// rota para pegar um Cliente
router.get('/v1/ingredients/get/:receipePartId', (req, res, next) => {
  controller.getRecipesIngredients(req.params.receipePartId).then(data => {
      res.send(200, data);
  }).catch(err => {
    res.send(503, err);  
  })
  next();
});
