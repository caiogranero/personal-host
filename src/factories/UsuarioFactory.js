const Aluno = require('../models/Aluno');
const Personal = require('../models/Personal');

const UserFactory = {
  CreateAluno(nome, senha, email, personalId) {
    return new Aluno({ nome, senha, email, personal: personalId });
  },

  CreatePersonal(nome, senha, email) {
    return new Personal({ nome, senha, email });
  },
};

module.exports = UserFactory;
