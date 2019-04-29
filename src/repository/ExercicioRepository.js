const mongoose = require('mongoose');
const ExercicioSchema = require('../models/Exercicio');

const exercicioRepository = {
  Find(params = {}) {
    return mongoose
      .model('Exercicio', ExercicioSchema)
      .find(params)
      .exec();
  }
}

module.exports = exercicioRepository;