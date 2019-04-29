/* eslint no-param-reassign: ["error", { "props": false }] */

const exercicioRepository = require('../repository/ExercicioRepository');

const exercicioController = {
  ListarExercicios({ nome }) {
    return exercicioRepository
      .Find({ nome })
      .then(exercicios => Promise.resolve(exercicios));
  },
};

module.exports = exercicioController;
