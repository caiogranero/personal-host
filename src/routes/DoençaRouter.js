const baseUrl = '/api/usuarios/:usuarioId/doencas';
const usuarioController = require('../controller/UsuarioController');
const routerHandler = require('../utils/RouterHandler');

module.exports = (app) => {
  app.post(`${baseUrl}`, routerHandler(usuarioController.NovaDoença, (req, res, next) => [
    req.params.usuarioId,
    req.body,
  ]));

  app.get(`${baseUrl}`, routerHandler(usuarioController.ListarDoenças, (req, res, next) => [req.params.usuarioId]));

  app.delete(`${baseUrl}/:doencaId`, routerHandler(usuarioController.RemoverDoença, (req, res, next) => [
    req.params.usuarioId,
    req.params.doencaId,
  ]));
};
