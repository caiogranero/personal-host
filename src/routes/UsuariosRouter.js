const baseUrl = '/api/usuarios';
const usuarioController = require('../controller/UsuarioController');
const routerHandler = require('../utils/RouterHandler');

module.exports = app => {
  app.post(baseUrl, routerHandler(usuarioController.CreateUsuario, (req, res, next) => [req.body]));

  app.get(baseUrl, routerHandler(usuarioController.ListarTodos, (req, res, next) => []));

  app.get(`${baseUrl}/:usuarioId`, routerHandler(usuarioController.GetUsuarioPorId, (req, res, next) => [req.params.usuarioId]));

  app.patch(`${baseUrl}/:usuarioId`, routerHandler(usuarioController.EditarUsuario, (req, res, next) => [req.params.usuarioId, req.body]));

  app.get(`${baseUrl}/:usuarioId/alunos`, routerHandler(usuarioController.GetAlunos, (req, res, next) => [req.headers.authorization, app.get('superSecret')]));
};
