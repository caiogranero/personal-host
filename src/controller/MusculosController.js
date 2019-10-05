/* eslint no-param-reassign: ["error", { "props": false }] */
const musculos = require('../models/Musculos');

const musculosController = {
  ListarMusculos() {
    return Object.keys(musculos).map(key => {
      return {
        id: musculos[key],
        text: key
      };
    });
  }
};

module.exports = musculosController;
