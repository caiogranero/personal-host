/* eslint no-param-reassign: ["error", { "props": false }] */

const usuarioRepository = require('../repository/UsuarioRepository');

const doençaController = {
  NovaDoença(usuarioId, { nome, descricao }) {
    return usuarioRepository.FindById(usuarioId).then(usuario => {
      if (usuario.doenças.find(d => d.nome.toLowerCase().trim() === nome.toLowerCase().trim())) {
        return Promise.reject(new Error('Doença já cadastrada para esse usuário'));
      }

      usuario.doenças.push({ nome, descriçao: descricao });

      return usuario
        .save()
        .then(document => Promise.resolve(document.id))
        .catch(error => Promise.reject(error));
    });
  },

  RemoverDoença(usuarioId, doençaId) {
    return usuarioRepository.FindById(usuarioId).then(usuario => {
      usuario.doenças.id(doençaId).remove();

      return usuario
        .save()
        .then(() => Promise.resolve(true))
        .catch(error => Promise.reject(error));
    });
  },

  ListarDoenças(usuarioId) {
    return usuarioRepository.FindById(usuarioId, ['doenças']).then(usuario => Promise.resolve(usuario));
  }
};

module.exports = doençaController;
