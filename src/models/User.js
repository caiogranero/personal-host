require('mongoose-schema-extend');
const _ = require('lodash');
const mongoose = require('mongoose');
const Entity = require('./Entity');

const {
  Schema,
} = mongoose;

const DoençaSchema = new Schema({
  nome: String,
  descriçao: String,
});

const ValorMedidaSchema = new Schema({
  data: Date,
  valor: Number,
});

const MedidaSchema = new Schema({
  nome: String,
  valores: [ValorMedidaSchema],
  ativo: {
    type: Boolean,
    default: true,
  },
});

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
    validate: {
      validator(v) {
        return /\S+@\S+\.\S+/.test(v);
      },
      message: 'Email não está no formato válido',
    },
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
    validate: {
      validator(v) {
        return /\+\d{2}\s\(\d{2}\)\s\d{4,5}-?\d{4}/g.test(v);
      },
      message: 'Telefone não é válido',
    },
  },
  altura: {
    type: Number,
    required: false,
    min: 0,
  },
  doenças: {
    type: [DoençaSchema],
    required: false,
    // validate: {
    //   validator(v) {
    //     console.log(this.doenças.length, v.length)
    //     return !this.doenças.find(d =>  d.nome === _.last(v).nome);
    //   },
    //   message: 'Doença já cadastrada.',
    // },
  },
  medidas: {
    type: [MedidaSchema],
    required: false,
    default: [{
      nome: 'Peso (kg)',
      valores: [],
      ativo: true,
    }, {
      nome: 'Gordura corporal (%)',
      valores: [],
      ativo: true,
    }, {
      nome: 'Músculo (%)',
      valores: [],
      ativo: true,
    }, {
      nome: 'Idade metabólica',
      valores: [],
      ativo: true,
    }],
    // validate: {
    //   validator(v) {
    //     console.log(v);
    //     return !this.medidas.find(d => d.ativo && d.nome === _.last(v).nome);
    //   },
    //   message: 'Medida já cadastrada.',
    // },
  },
  remedios: {
    type: [RemedioSchema],
    required: false,
    // validate: {
    //   validator(v) {
    //     // console.log(v);
    //     // console.log(!!this.remedios.find(d => d.nome === v.nome))
    //     return !this.remedios.find(d => d.nome === _.last(v).nome);
    //   },
    //   message: 'Remedio já cadastrado.',
    // },
  },
}, {
  collection: 'usuarios',
});

module.exports = UsuarioSchema;
