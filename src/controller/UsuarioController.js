/* eslint no-param-reassign: ["error", { "props": false }] */

const UsuarioFactory = require('../factories/UsuarioFactory');
const TipoDeUsuario = require('../utils/TipoDeUsuario');
const UsuarioRepository = require('../repository/UsuarioRepository');

class UsuarioController {
  constructor() {
    this.usuarioFactory = UsuarioFactory;
    this.usuarioRepository = UsuarioRepository;
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

  GetUsuarioPorId({
    id,
  }) {
    return this.usuarioRepository.FindById(id);
  }

  NovaDoença(usuarioId, {
    nome,
    descricao,
  }) {
    return this.usuarioRepository.FindById(usuarioId).then((usuario) => {
      usuario.doenças.push({
        nome,
        descriçao: descricao,
      });

      return usuario.save()
        .then(document => Promise.resolve(document))
        .catch(error => Promise.reject(error));
    });
  }

  RemoverDoença(usuarioId, doençaId) {
    return this.usuarioRepository.FindById(usuarioId).then((usuario) => {
      usuario.doenças.id(doençaId).remove();

      return usuario.save()
        .then(document => Promise.resolve(document))
        .catch(error => Promise.reject(error));
    });
  }

  ListarDoenças(usuarioId) {
    return this.usuarioRepository.FindById(usuarioId).then(usuario => Promise.resolve(usuario.doenças));
  }

  NovaMedida(usuarioId, {
    nome,
  }) {
    return this.usuarioRepository.FindById(usuarioId).then((usuario) => {
      usuario.medidas.push({
        nome,
      });

      return usuario.save()
        .then(document => Promise.resolve(document))
        .catch(error => Promise.reject(error));
    });
  }

  ListarMedidas(usuarioId) {
    return this.usuarioRepository.FindById(usuarioId).then(usuario => Promise.resolve(usuario.medidas));
  }

  AdicionarValorEmMedida(usuarioId, medidaId, {
    data,
    valor,
  }) {
    return this.usuarioRepository.FindById(usuarioId).then((usuario) => {
      const medida = usuario.medidas.id(medidaId);

      medida.valores.push({
        data: new Date(data),
        valor: Number(valor),
      });

      return usuario.save()
        .then(document => Promise.resolve(document))
        .catch(error => Promise.reject(error));
    });
  }

  RemoverMedida(usuarioId, medidaId) {
    return this.usuarioRepository.FindById(usuarioId).then((usuario) => {
      const medida = usuario.medidas.id(medidaId);

      if (medida.valores.length > 0) {
        medida.ativo = false;
      } else {
        usuario.medidas.id(medidaId).remove();
      }

      return usuario.save()
        .then(document => Promise.resolve(document))
        .catch(error => Promise.reject(error));
    });
  }

  NovoRemedio(usuarioId, {
    nome,
    descricao,
  }) {
    return this.usuarioRepository.FindById(usuarioId).then((usuario) => {
      usuario.remedios.push({
        nome,
        descriçao: descricao,
      });

      return usuario.save()
        .then(document => Promise.resolve(document))
        .catch(error => Promise.reject(error));
    });
  }

  ListarRemedios(usuarioId) {
    return this.usuarioRepository.FindById(usuarioId).then(usuario => Promise.resolve(usuario.remedios));
  }

  RemoverRemedio(usuarioId, remedioId) {
    return this.usuarioRepository.FindById(usuarioId).then((usuario) => {
      usuario.remedios.id(remedioId).remove();

      return usuario.save()
        .then(document => Promise.resolve(document))
        .catch(error => Promise.reject(error));
    });
  }
}

module.exports = UsuarioController;