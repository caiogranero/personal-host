const mongoose = require('mongoose');
const UsuarioSchema = require('../models/User');

const usuarioRepository = {
  FindById(id) {
    return mongoose.model('Usuario', UsuarioSchema).findById({
      _id: id,
    }).exec();
  },

  ListAll() {
    return mongoose.model('Usuario', UsuarioSchema).find().exec();
  },
};
module.exports = usuarioRepository;
