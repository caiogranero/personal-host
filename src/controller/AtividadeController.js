/* eslint no-param-reassign: ["error", { "props": false }] */
const atividadeRepository = require('../repository/AtividadeRepository');

const objetivosController = {
  ListarAtividades() {
    return atividadeRepository.ListAll();
  }
};

module.exports = objetivosController;
