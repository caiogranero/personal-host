const baseUrl = '/api/usuarios/:alunoId/treinos';
const controller = require('../controller/TreinosController');
const routerHandler = require('../utils/RouterHandler');

module.exports = (app) => {
  app.post(`${baseUrl}`, routerHandler(controller.NovoTreino, (req, res, next) => [
    req.params.alunoId,
    req.body,
    req.headers.authorization,
    app.get('superSecret')
  ]));

  app.get(`${baseUrl}/:treinoId`, routerHandler(controller.GetTreino, (req, res, next) => [
    req.params.alunoId, 
    req.params.treinoId
  ]));

  app.post(`${baseUrl}/:treinoId/grupo`, routerHandler(controller.NovoGrupo, (req, res, next) => [
    req.params.alunoId,
    req.params.treinoId,
    req.body,
  ]));

//   app.post(`${baseUrl}/:treinoId/grupo/:grupoId/exercicio`, routerHandler(controller.NovoGrupo, (req, res, next) => [
//     req.params.alunoId,
//     req.body,
//   ]));

//   app.delete(`${baseUrl}/:doencaId`, routerHandler(controller.RemoverDoença, (req, res, next) => [
//     req.params.alunoId,
//     req.params.doencaId,
//   ]));
};
