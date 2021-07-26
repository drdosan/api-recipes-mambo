'use-strict'

// importando as requisições do server
const router = require('../config/server.js').server;
// importando o Controller de usuários
const controller = require('../controllers/recipesPartsController');


// rota para inserir Cliente
router.post('/v1/recipesparts/create', (req, res, next) => {
  controller.insertRecipesParts(req.body).then(data => {
    // pegando o id do usuário
      res.send(200, data);
  }).catch(err => {
    res.send(503, err);
  })
  next();
});

// rota para pegar um Cliente
router.get('/v1/recipesparts/get/:receipePartId', (req, res, next) => {
  controller.getRecipesParts(req.params.receipePartId).then(data => {
      res.send(200, data);
  }).catch(err => {
    res.send(503, err);  
  })
  next();
});


router.get('/v1/recipesparts/list/:recipeId', (req, res, next) => {
  controller.listRecipesParts(req.params.recipeId).then(data => {
      res.send(200, data);
  }).catch(err => {
    res.send(503, err);  
  })
  next();
});
