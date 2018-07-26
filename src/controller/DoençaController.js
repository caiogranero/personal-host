/* eslint no-param-reassign: ["error", { "props": false }] */

const usuarioRepository = require('../repository/UsuarioRepository');

const doençaController = {
  NovaDoença(usuarioId, { nome, descricao }) {
    return usuarioRepository.FindById(usuarioId).then((usuario) => {
      usuario.doenças.push({
        nome,
        descriçao: descricao,
      });

      return usuario
        .save()
        .then(document => Promise.resolve(document.id))
        .catch(error => Promise.reject(error));
    });
  },

  RemoverDoença(usuarioId, doençaId) {
    return usuarioRepository.FindById(usuarioId).then((usuario) => {
      usuario.doenças.id(doençaId).remove();

      return usuario
        .save()
        .then(() => Promise.resolve(true))
        .catch(error => Promise.reject(error));
    });
  },

  ListarDoenças(usuarioId) {
    return usuarioRepository
      .FindById(usuarioId)
      .then(usuario => Promise.resolve(usuario.doenças));
  },
};

module.exports = doençaController;
