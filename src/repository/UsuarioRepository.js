const mongoose = require('mongoose');
const UsuarioSchema = require('../models/User');

const usuarioRepository = {
  FindById(id, fields = [], params = {}) {
    return mongoose
      .model('Usuario', UsuarioSchema)
      .findById(Object.assign({ _id: id }, params))
      .select(fields.join(' '))
      .exec();
  },

  GetByLogin({ email, senha }) {
    return mongoose
      .model('Usuario', UsuarioSchema)
      .findOne({ email, senha })
      .exec();
  },

  ListAll(skip = 0, limit = 10) {
    return mongoose
      .model('Usuario', UsuarioSchema)
      .find()
      .skip(skip)
      .limit(limit)
      .exec();
  },

  FindAlunos(query) {
    return mongoose
      .model('Usuario', UsuarioSchema)
      .find(Object.assign({ _type: 'Aluno' }, query))
      .exec();
  },
};
module.exports = usuarioRepository;
