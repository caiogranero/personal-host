/* eslint no-param-reassign: ["error", { "props": false }] */

const usuarioFactory = require('../factories/UsuarioFactory');
const usuarioRepository = require('../repository/UsuarioRepository');
const TipoDeUsuario = require('../utils/TipoDeUsuario');
const moment = require('moment');

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

  EditarUsuario(usuarioId, {
    nascimento, genero, telefone, altura,
  }) {
    return usuarioRepository.FindById(usuarioId).then((usuario) => {
      if (nascimento && nascimento !== usuario.nascimento) {
        usuario.set({ nascimento: moment(nascimento) });
      }

      if (genero && genero !== usuario.genero) {
        usuario.set({ genero });
      }

      if (telefone && telefone !== usuario.telefone) {
        usuario.set({ telefone });
      }

      if (altura && altura !== usuario.altura) {
        usuario.set({ altura });
      }

      return usuario
        .save()
        .then(document => Promise.resolve(document))
        .catch(error => Promise.reject(error));
    });
  },

  GetUsuarioPorId(id) {
    return usuarioRepository.FindById(id);
  },

  GetAlunos(id) {
    usuarioRepository.FindById(id).then((usuario) => {
      if (usuario._type !== 'Personal') {
        throw new Error('Não autorizado');
      }

      return usuarioRepository.FindAlunos({ Personal: id });
    });
  },
};

module.exports = usuarioController;
