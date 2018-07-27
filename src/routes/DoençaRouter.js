const baseUrl = '/api/usuarios/:usuarioId/doencas';
const doençaController = require('../controller/DoençaController');
const routerHandler = require('../utils/RouterHandler');

module.exports = (app) => {
  app.post(`${baseUrl}`, routerHandler(doençaController.NovaDoença, (req, res, next) => [
    req.params.usuarioId,
    req.body,
  ]));

  app.get(`${baseUrl}`, routerHandler(doençaController.ListarDoenças, (req, res, next) => [req.params.usuarioId]));

  app.delete(`${baseUrl}/:doencaId`, routerHandler(doençaController.RemoverDoença, (req, res, next) => [
    req.params.usuarioId,
    req.params.doencaId,
  ]));
};
