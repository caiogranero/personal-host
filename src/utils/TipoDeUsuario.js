const Enum = require('./Enum');

const TipoDeUsuario = Object.freeze({
  Personal: new Enum('Personal', 1),
  Aluno: new Enum('Aluno', 2),
});

module.exports = TipoDeUsuario;
