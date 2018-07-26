/* eslint no-param-reassign: ["error", { "props": false }] */

const usuarioFactory = require('../factories/UsuarioFactory');
const usuarioRepository = require('../repository/UsuarioRepository');
const TipoDeUsuario = require('../utils/TipoDeUsuario');

const usuarioController = {
  CreateUsuario({
    nome, senha, email, personal, type,
  }) {
    let usuario;

    if (type === TipoDeUsuario.Personal.get()) {
      usuario = usuarioFactory.CreatePersonal(nome, senha, email);
    }

    if (type === TipoDeUsuario.Aluno.get()) {
      usuario = usuarioFactory.CreateAluno(nome, senha, email, personal);
    }

    return usuario
      .save()
      .then(document => Promise.resolve(document.id))
      .catch(error => Promise.reject(error));
  },

  ListarTodos() {
    return usuarioRepository.ListAll();
  },

  GetUsuarioPorId(id) {
    return usuarioRepository.FindById(id);
  },
};

module.exports = usuarioController;
