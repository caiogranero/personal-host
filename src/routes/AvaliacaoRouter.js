const baseUrl = '/api/usuarios/:usuarioId/avaliacoes/:avaliacaoId';
const avaliacaoController = require('../controller/AvaliacaoController');
const routerHandler = require('../utils/RouterHandler');

module.exports = app => {
  app.put(`${baseUrl}`, routerHandler(avaliacaoController.Editar, (req, res, next) => [req.params.usuarioId, req.params.avaliacaoId]));

  app.post(`${baseUrl}`, routerHandler(avaliacaoController.Criar, (req, res, next) => [req.params.usuarioId, req.params.avaliacaoId]));
};
