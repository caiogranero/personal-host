require('mongoose-schema-extend');
const _ = require('lodash');
const mongoose = require('mongoose');
const Entity = require('./Entity');
const Musculos = require('./Musculos');

const ExercicioSchema = Entity.extend({
  nome: {
    type: String,
    required: true,
  },
  musculo: {
    type: Number,
    enum: Object.values(Musculos),
  },
  imagem: {
    type: String  
  },
  descricao: {
    type: String
  },
  observacoes: {
    type:  [String]
  }
}, {
  collection: 'exercicios',
});

module.exports = mongoose.model('Exercicio', ExercicioSchema);