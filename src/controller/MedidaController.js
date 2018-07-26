/* eslint no-param-reassign: ["error", { "props": false }] */

const usuarioRepository = require('../repository/UsuarioRepository');

const medidaController = {
  NovaMedida(usuarioId, { nome }) {
    return usuarioRepository.FindById(usuarioId).then((usuario) => {
      usuario.medidas.push({
        nome,
      });

      return usuario
        .save()
        .then(document => Promise.resolve(document.id))
        .catch(error => Promise.reject(error));
    });
  },

  ListarMedidas(usuarioId) {
    return usuarioRepository
      .FindById(usuarioId)
      .then(usuario => Promise.resolve(usuario.medidas));
  },

  AdicionarValorEmMedida(usuarioId, medidaId, { data, valor }) {
    return usuarioRepository.FindById(usuarioId).then((usuario) => {
      const medida = usuario.medidas.id(medidaId);

      medida.valores.push({
        data: new Date(data),
        valor: Number(valor),
      });

      return usuario
        .save()
        .then(document => Promise.resolve(document.id))
        .catch(error => Promise.reject(error));
    });
  },

  RemoverMedida(usuarioId, medidaId) {
    return usuarioRepository.FindById(usuarioId).then((usuario) => {
      const medida = usuario.medidas.id(medidaId);

      if (medida.valores.length > 0) {
        medida.ativo = false;
      } else {
        usuario.medidas.id(medidaId).remove();
      }

      return usuario
        .save()
        .then(() => Promise.resolve(true))
        .catch(error => Promise.reject(error));
    });
  },
};

module.exports = medidaController;
