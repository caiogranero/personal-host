/* eslint no-param-reassign: ["error", { "props": false }] */
const objetivos = require("../models/Objetivos");
const _ = require('lodash');

const objetivosController = {
  ListarObjetivos() {
    return Object.keys(objetivos).map(key => {
      return {
        id: objetivos[key],
        text: _.startCase(key)
      };
    });
  }
};

module.exports = objetivosController;
