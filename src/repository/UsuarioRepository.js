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

  ListAll(skip = 0, limit = 10) {
    return mongoose
      .model('Usuario', UsuarioSchema)
      .find()
      .skip(skip)
      .limit(limit)
      .exec();
  },
};
module.exports = usuarioRepository;
