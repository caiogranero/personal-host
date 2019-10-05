const mongoose = require('mongoose');
const TreinoSchema = require('../models/Treino');

const treinoRepository = {
  Find(alunoId, treinoId, params = {}) {
    return mongoose
      .model('Treino', TreinoSchema)
      .find(params)
      .exec();
  }
};

module.exports = treinoRepository;
