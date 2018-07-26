const mongoose = require('mongoose');
const UsuarioSchema = require('../models/User');

const usuarioRepository = {
  FindById(_id) {
    return mongoose.model('Usuario', UsuarioSchema).findById({
      _id,
    }).exec();
  },
};
module.exports = usuarioRepository;