const baseUrl = '/api/exercicio';
const exercicioController = require('../controller/ExercicioController');
const routerHandler = require('../utils/RouterHandler');

module.exports = (app) => {
  app.get(`${baseUrl}`, routerHandler(exercicioController.ListarExercicios, (req, res, next) => [req.body]));
};
