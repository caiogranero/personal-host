const mongoose = require('mongoose');
const UsuarioSchema = require('../models/User');

const usuarioRepository = {
  FindById(id, fields = ['-senha'], params = {}) {
    return mongoose
      .model('Usuario', UsuarioSchema)
      .findById(Object.assign({ _id: id }, params))
      .select(fields.join(' '))
      .exec();
  },

  GetByFirebaseId({ firebaseId }) {
    return mongoose
      .model('Usuario', UsuarioSchema)
      .findOne({ firebaseId })
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

  FindUser(query) {
    return mongoose
      .model('Usuario', UsuarioSchema)
      .find(query)
      .exec();
  },

  GetPersonalByCode(code) {
    return mongoose
      .model('Usuario', UsuarioSchema)
      .find({ code })
      .exec();
  },

  FindAlunos(query) {
    return mongoose
      .model('Usuario', UsuarioSchema)
      .find(Object.assign({ _type: 'Aluno' }, query))
      .exec();
  }
};
module.exports = usuarioRepository;
