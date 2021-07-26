'use-strict'

// importando as requisições do server
const router = require('../config/server.js').server;
// importando o Controller de usuários
const controller = require('../controllers/recipesController');


// rota para listagem de Clientes
router.post('/v1/recipes/list', (req, res, next) => {
  controller.listRecipes(req.body).then(data => {
    res.send(200, data);
  }).catch(err => {
    res.send(503, err);
  })
  next();
});


// rota para pegar um Cliente
router.get('/v1/recipes/get/:recipeId', (req, res, next) => {
  controller.getRecipe(req.params.recipeId).then(data => {
      res.send(200, data);
  }).catch(err => {
    res.send(503, err);  
  })
  next();
});

router.get('/v1/recipes/addingredients/:recipeId', (req, res, next) => {
  controller.addIngredients(req.params.recipeId).then(data => {
    res.send(200, data);
  }).catch(err => {
    res.send(503, err);
  })
  next();
});
