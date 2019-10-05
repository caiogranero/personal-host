const baseUrl = '/api/musculo';
const musculosController = require('../controller/MusculosController');
const routerHandler = require('../utils/RouterHandler');

module.exports = app => {
  app.get(`${baseUrl}`, routerHandler(musculosController.ListarMusculos, (req, res, next) => [req.body]));
};
