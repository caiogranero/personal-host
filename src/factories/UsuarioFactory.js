const Aluno = require('../models/Aluno');
const Personal = require('../models/Personal');
const crypto = require('crypto');

const UserFactory = {
  CreateAluno(nome, senha, email, personalId) {
    return new Aluno({
      nome, senha, email, personal: personalId,
    });
  },

  CreatePersonal(nome, senha, email) {
    const token = crypto.randomBytes(16).toString('hex');

    return new Personal({ nome, senha, email, code: token });
  },

  CreatePersonal(nome, email, facebookId) {
    const token = crypto.randomBytes(16).toString('hex');

    return new Personal({ nome, email, facebookId, code: token })
  }
};

module.exports = UserFactory;
