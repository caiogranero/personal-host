/* eslint no-param-reassign: ["error", { "props": false }] */

const usuarioRepository = require('../repository/UsuarioRepository');

const remedioController = {
  NovoRemedio(usuarioId, { nome, descricao }) {
    return usuarioRepository.FindById(usuarioId).then((usuario) => {
      usuario.remedios.push({
        nome,
        descriçao: descricao,
      });

      return usuario
        .save()
        .then(document => Promise.resolve(document))
        .catch(error => Promise.reject(error));
    });
  },

  ListarRemedios(usuarioId) {
    return usuarioRepository
      .FindById(usuarioId)
      .then(usuario => Promise.resolve(usuario.remedios));
  },

  RemoverRemedio(usuarioId, remedioId) {
    return usuarioRepository.FindById(usuarioId).then((usuario) => {
      usuario.remedios.id(remedioId).remove();

      return usuario
        .save()
        .then(() => Promise.resolve(true))
        .catch(error => Promise.reject(error));
    });
  }
};

module.exports = remedioController;
