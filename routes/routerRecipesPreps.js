'use-strict'

// importando as requisições do server
const router = require('../config/server.js').server;
// importando o Controller de usuários
const controller = require('../controllers/recipesPrepsController');


// rota para inserir Cliente
router.post('/v1/recipespreps/create', (req, res, next) => {
  controller.insertRecipesPreps(req.body).then(data => {
    // pegando o id do usuário
      res.send(200, data);
  }).catch(err => {
    res.send(503, err);
  })
  next();
});

// rota para pegar um Cliente
router.get('/v1/recipespreps/get/:receipePartId', (req, res, next) => {
  controller.getRecipesPreps(req.params.receipePartId).then(data => {
      res.send(200, data);
  }).catch(err => {
    res.send(503, err);  
  })
  next();
});
