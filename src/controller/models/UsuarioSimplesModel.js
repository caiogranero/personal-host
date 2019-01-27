class UsuarioSimplesModel {
  constructor(nome, updateAt, medidas, id, genero) {
    this.nome = nome;
    this.updateAt = updateAt;
    this.medidas = medidas;
    this.genero = genero;
    this._id = id;
  }
}

module.exports = UsuarioSimplesModel;