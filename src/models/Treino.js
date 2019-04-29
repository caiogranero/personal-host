require('mongoose-schema-extend');
const _ = require('lodash');
const mongoose = require('mongoose');
const Entity = require('./Entity');
const Objetivos = require('./Objetivos');

const TreinoExercicioSchema = new Schema({
  exercicio: {
    type: [Schema.Types.ObjectId],
    required: true,
    ref: 'Exercicio'
  },
  repeticoes: {
    type: Number
  },
  serie: {
    type: Number
  },
  descanso: {
    type: Number
  },
  ordem: {
    type: Number
  }
});

const TreinoSchema = Entity.extend({
  nome: {
    type: String
  },
  objetivos: {
    type: Number,
    enum: Object.values(Objetivos),
  },
  observacao: {
    type: String
  },
  dataInicio: {
    type: Date
  },
  dataFinal: {
    type: Date
  },
  exercicios: {
    type: [TreinoExercicioSchema]
  },
  personal: {
    type: [Schema.Types.ObjectId],
    required: true,
    ref: 'Personal'
  },
  aluno: {
    type: [Schema.Types.ObjectId],
    required: true,
    ref: 'Aluno',
  }
}, {
  collection: 'treinos',
});

module.exports = mongoose.model('Treino', TreinoSchema);