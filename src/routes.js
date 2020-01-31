const { Router } = require('express')
const GameController = require('./controllers/GameController')

const routes = Router();

routes.get('/games', GameController.index);

routes.post('/games', GameController.store);

routes.put('/games/:id', GameController.update);

routes.delete('/games/:id', GameController.destroy);

module.exports = routes;