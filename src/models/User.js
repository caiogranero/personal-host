require('mongoose-schema-extend');
const mongoose = require('mongoose');
const Entity = require('./Entity');

const {
  Schema,
} = mongoose;

// TODO: Adicionar pré-save com validaçao de duplicidades
const DoençaSchema = new Schema({
  nome: String,
  descriçao: String,
});

const ValorMedidaSchema = new Schema({
  data: Date,
  valor: Number,
});

// TODO: Adicionar pré-save com validaçao de duplicidades
const MedidaSchema = new Schema({
  nome: String,
  valores: [ValorMedidaSchema],
  ativo: {
    type: Boolean,
    default: true,
  },
});

// TODO: Adicionar pré-save com validaçao de duplicidades
const RemedioSchema = new Schema({
  nome: String,
  descriçao: String,
});

const UsuarioSchema = Entity.extend({
  nome: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  nascimento: {
    type: Date,
    required: false,
  },
  genero: {
    type: Number,
    required: false,
  },
  telefone: {
    type: String,
    required: false,
  },
  altura: {
    type: Number,
    required: false,
  },
  doenças: {
    type: [DoençaSchema],
    required: false,
  },
  medidas: {
    type: [MedidaSchema],
    required: false,
  },
  remedios: {
    type: [RemedioSchema],
    required: false,
  },
}, {
  collection: 'usuarios',
});

module.exports = UsuarioSchema;
