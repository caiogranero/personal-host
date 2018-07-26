const baseUrl = '/api/usuarios';
const HttpStatusCode = require('../utils/HttpStatusCode');
const UsuarioController = require('../controller/UsuarioController');

module.exports = (app) => {
  const usuarioController = new UsuarioController();

  app.post(baseUrl, (req, res) => {
    const usuarioPromise = usuarioController.CreateUsuario(req.body);

    usuarioPromise.then((usuario) => {
      res.status(HttpStatusCode.Success.get()).send({
        data: usuario.id,
      });
    }, (error) => {
      res.status(HttpStatusCode.InternalServerError.get()).send({
        error: error.message,
      });
    });
  });

  app.get(`${baseUrl}/:usuarioId`, (req, res) => {
    const usuarioPromise = usuarioController.GetUsuarioPorId(req.params.usuarioId);

    usuarioPromise.then((usuario) => {
      res.status(HttpStatusCode.Success.get()).send({
        data: usuario.id,
      });
    }, (error) => {
      res.status(HttpStatusCode.InternalServerError.get()).send({
        error: error.message,
      });
    });
  });

  app.post(`${baseUrl}/:usuarioId/doencas`, (req, res) => {
    const usuarioPromise = usuarioController.NovaDoença(req.params.usuarioId, req.body);

    usuarioPromise.then((usuario) => {
      res.status(HttpStatusCode.Success.get()).send({
        data: usuario.id,
      });
    }).catch((error) => {
      res.status(HttpStatusCode.InternalServerError.get()).send({
        error: error.message,
      });
    });
  });

  app.get(`${baseUrl}/:usuarioId/doencas`, (req, res) => {
    const usuarioPromise = usuarioController.ListarDoenças(req.params.usuarioId, req.body);

    usuarioPromise.then((usuario) => {
      res.status(HttpStatusCode.Success.get()).send({
        data: usuario,
      });
    }).catch((error) => {
      res.status(HttpStatusCode.InternalServerError.get()).send({
        error: error.message,
      });
    });
  });


  app.delete(`${baseUrl}/:usuarioId/doencas/:doencaId`, (req, res) => {
    const usuarioPromise = usuarioController.RemoverDoença(req.params.usuarioId, req.params.doencaId);

    usuarioPromise.then((usuario) => {
      res.status(HttpStatusCode.Success.get()).send({
        data: usuario.id,
      });
    }).catch((error) => {
      res.status(HttpStatusCode.InternalServerError.get()).send({
        error: error.message,
      });
    });
  });

  app.post(`${baseUrl}/:usuarioId/medidas`, (req, res) => {
    const usuarioPromise = usuarioController.NovaMedida(req.params.usuarioId, req.body);

    usuarioPromise.then((usuario) => {
      res.status(HttpStatusCode.Success.get()).send({
        data: usuario.id,
      });
    }).catch((error) => {
      res.status(HttpStatusCode.InternalServerError.get()).send({
        error: error.message,
      });
    });
  });

  app.get(`${baseUrl}/:usuarioId/medidas`, (req, res) => {
    const usuarioPromise = usuarioController.ListarMedidas(req.params.usuarioId, req.body);

    usuarioPromise.then((usuario) => {
      res.status(HttpStatusCode.Success.get()).send({
        data: usuario,
      });
    }).catch((error) => {
      res.status(HttpStatusCode.InternalServerError.get()).send({
        error: error.message,
      });
    });
  });

  app.delete(`${baseUrl}/:usuarioId/medidas/:medidaId`, (req, res) => {
    const usuarioPromise = usuarioController.RemoverMedida(req.params.usuarioId, req.params.medidaId);

    usuarioPromise.then((usuario) => {
      res.status(HttpStatusCode.Success.get()).send({
        data: usuario.id,
      });
    }).catch((error) => {
      res.status(HttpStatusCode.InternalServerError.get()).send({
        error: error.message,
      });
    });
  });

  app.post(`${baseUrl}/:usuarioId/medidas/:medidaId/valor`, (req, res) => {
    const usuarioPromise = usuarioController.AdicionarValorEmMedida(req.params.usuarioId, req.params.medidaId, req.body);

    usuarioPromise.then((usuario) => {
      res.status(HttpStatusCode.Success.get()).send({
        data: usuario.id,
      });
    }).catch((error) => {
      res.status(HttpStatusCode.InternalServerError.get()).send({
        error: error.message,
      });
    });
  });

  app.post(`${baseUrl}/:usuarioId/remedios`, (req, res) => {
    const usuarioPromise = usuarioController.NovaRemedio(req.params.usuarioId, req.body);

    usuarioPromise.then((usuario) => {
      res.status(HttpStatusCode.Success.get()).send({
        data: usuario.id,
      });
    }).catch((error) => {
      res.status(HttpStatusCode.InternalServerError.get()).send({
        error: error.message,
      });
    });
  });

  app.get(`${baseUrl}/:usuarioId/remedios`, (req, res) => {
    const usuarioPromise = usuarioController.ListarRemedios(req.params.usuarioId, req.body);

    usuarioPromise.then((usuario) => {
      res.status(HttpStatusCode.Success.get()).send({
        data: usuario,
      });
    }).catch((error) => {
      res.status(HttpStatusCode.InternalServerError.get()).send({
        error: error.message,
      });
    });
  });

  app.delete(`${baseUrl}/:usuarioId/remedios/:remedioId`, (req, res) => {
    const usuarioPromise = usuarioController.RemoverRemedio(req.params.usuarioId, req.params.remedioId);

    usuarioPromise.then((usuario) => {
      res.status(HttpStatusCode.Success.get()).send({
        data: usuario.id,
      });
    }).catch((error) => {
      res.status(HttpStatusCode.InternalServerError.get()).send({
        error: error.message,
      });
    });
  });
};