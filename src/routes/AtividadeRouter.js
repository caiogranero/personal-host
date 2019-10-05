const baseUrl = '/api/atividades';
const atividadeController = require('../controller/AtividadeController');
const routerHandler = require('../utils/RouterHandler');

module.exports = app => {
  app.get(`${baseUrl}`, routerHandler(atividadeController.ListarAtividades, (req, res, next) => [req.params.usuarioId]));
};
