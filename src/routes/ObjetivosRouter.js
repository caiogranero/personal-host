const baseUrl = '/api/objetivos';
const ObjetivosController = require('../controller/ObjetivosController');
const routerHandler = require('../utils/RouterHandler');

module.exports = (app) => {
  app.get(baseUrl, routerHandler(ObjetivosController.ListarObjetivos, (req, res, next) => [
    req.body
  ]));
};
