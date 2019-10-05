require('mongoose-schema-extend');
const _ = require('lodash');
const mongoose = require('mongoose');
const Entity = require('./Entity');

const { Schema } = mongoose;

const DoençaSchema = new Schema({
  nome: String,
  descriçao: String
});

const ValorMedidaSchema = new Schema({
  data: Date,
  valor: Number
});

const MedidaSchema = new Schema({
  nome: String,
  valores: [ValorMedidaSchema],
  ativo: {
    type: Boolean,
    default: true
  }
});

const RemedioSchema = new Schema({
  nome: String,
  descriçao: String
});

const UsuarioSchema = Entity.extend(
  {
    nome: {
      type: String,
      required: true
    },
    tokenId: {
      type: String,
      required: false
    },
    firebaseId: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: true
    },
    nascimento: {
      type: Date,
      required: false
    },
    genero: {
      type: Number,
      required: false
    },
    telefone: {
      type: String,
      required: false,
      validate: {
        validator(v) {
          return /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/.test(v);
        },
        message: 'Telefone não é válido'
      }
    },
    altura: {
      type: Number,
      required: false,
      min: 0
    },
    doenças: {
      type: [DoençaSchema],
      required: false
    },
    medidas: {
      type: [MedidaSchema],
      required: false,
      default: [
        {
          nome: 'Peso (kg)',
          valores: [],
          ativo: true
        },
        {
          nome: 'Gordura corporal (%)',
          valores: [],
          ativo: true
        },
        {
          nome: 'Músculo (%)',
          valores: [],
          ativo: true
        },
        {
          nome: 'Idade metabólica',
          valores: [],
          ativo: true
        }
      ]
    },
    remedios: {
      type: [RemedioSchema],
      required: false
    }
  },
  {
    collection: 'usuarios'
  }
);

module.exports = UsuarioSchema;
