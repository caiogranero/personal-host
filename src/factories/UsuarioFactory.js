const Aluno = require('../models/Aluno');
const Personal = require('../models/Personal');
const crypto = require('crypto');

const UserFactory = {
  CreateAluno({ nome, email, personalId, firebaseId, tokenId }) {
    return new Aluno({
      nome,
      email,
      personal: personalId,
      firebaseId,
      tokenId
    });
  },

  CreatePersonal({ nome, email, firebaseId, tokenId }) {
    const token = crypto.randomBytes(16).toString('hex');

    return new Personal({
      nome,
      email,
      code: token,
      firebaseId,
      tokenId
    });
  }
};

module.exports = UserFactory;
