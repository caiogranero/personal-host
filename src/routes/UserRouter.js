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
};
