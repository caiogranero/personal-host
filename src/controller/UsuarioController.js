const UsuarioFactory = require('../factories/UsuarioFactory');
const TipoDeUsuario = require('../utils/TipoDeUsuario');

class UsuarioController {
  constructor() {
    this.usuarioFactory = UsuarioFactory;
  }

  CreateUsuario({
    nome,
    senha,
    email,
    personal,
    type,
  }) {
    let usuario;

    if (type === TipoDeUsuario.Personal.get()) {
      usuario = this.usuarioFactory.CreatePersonal(nome, senha, email);
    }

    if (type === TipoDeUsuario.Aluno.get()) {
      usuario = this.usuarioFactory.CreateAluno(nome, senha, email, personal);
    }

    return usuario.save()
      .then(document => Promise.resolve(document))
      .catch(error => Promise.reject(error));
  }
}

module.exports = UsuarioController;
