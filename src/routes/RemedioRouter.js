const baseUrl = '/api/usuarios/:usuarioId/remedios';
const remedioController = require('../controller/RemedioController');
const routerHandler = require('../utils/RouterHandler');

module.exports = app => {
  app.post(`${baseUrl}`, routerHandler(remedioController.NovoRemedio, (req, res, next) => [req.params.usuarioId, req.body]));

  app.get(`${baseUrl}`, routerHandler(remedioController.ListarRemedios, (req, res, next) => [req.params.usuarioId]));

  app.delete(`${baseUrl}/:remedioId`, routerHandler(remedioController.RemoverRemedio, (req, res, next) => [req.params.usuarioId, req.params.remedioId]));
};
