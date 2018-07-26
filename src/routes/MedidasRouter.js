const baseUrl = '/api/usuarios/:usuarioId/medidas';
const medidaController = require('../controller/MedidaController');
const routerHandler = require('../utils/RouterHandler');

module.exports = (app) => {
  app.post(`${baseUrl}`, routerHandler(medidaController.NovaMedida, (req, res, next) => [
    req.params.usuarioId,
    req.body,
  ]));

  app.get(`${baseUrl}`, routerHandler(medidaController.ListarMedidas, (req, res, next) => [req.params.usuarioId]));

  app.delete(`${baseUrl}/:medidaId`, routerHandler(medidaController.RemoverMedida, (req, res, next) => [
    req.params.usuarioId,
    req.params.medidaId,
  ]));

  app.post(`${baseUrl}/:medidaId/valor`, routerHandler(medidaController.AdicionarValorEmMedida, (req, res, next) => [
    req.params.usuarioId,
    req.params.medidaId,
    req.body,
  ]));
};
