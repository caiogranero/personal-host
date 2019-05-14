/* eslint no-param-reassign: ["error", { "props": false }] */

const UsuarioSimplesModel = require('./models/UsuarioSimplesModel');
const usuarioFactory = require('../factories/UsuarioFactory');
const usuarioRepository = require('../repository/UsuarioRepository');
const moment = require('moment');
const jwt = require('jsonwebtoken');
const ObjectId = (require('mongoose').Types.ObjectId);

const usuarioController = {
  CreateUsuario({nome, email, code, firebaseId, tokenId}) {
    console.log(email)
    //TODO: Buscar no firebase o usuário para ver se existe.
    if (code) {
      return usuarioController.CreateAluno({nome, email, firebaseId, tokenId, code});
    } else {
      return usuarioController.CreatePersonal({nome, email, firebaseId, tokenId});
    }
  },

  CreatePersonal({
    nome, email, firebaseId, tokenId
  }) {
    return usuarioRepository.FindUser({ email }).then(user => {
      console.log(user);
      if (user && user.length > 0) throw new Error("Email já cadastrado.");
      
      const usuario = usuarioFactory.CreatePersonal({nome,  email, firebaseId, tokenId});

      return usuario
        .save()
        .then(document => Promise.resolve(document.id))
        .catch(error => Promise.reject(error));
    })
  },

  CreateAluno({
    nome, email, code, firebaseId, tokenId
  }) {
    return usuarioRepository.FindUser({ email }).then(user => {
      console.log(user);
      if (user && user.length > 0) throw new Error("Email já cadastrado.");
      
      return usuarioRepository.GetPersonalByCode(code).then(personal => {
        if (!personal || personal.length === 0) throw new Error("Personal não encontrado.");

        const aluno = usuarioFactory.CreateAluno({nome, email, personalId: personal[0].id, firebaseId, tokenId});

        personal[0].alunos.push(aluno.id);

        return Promise.all([personal[0].save(), aluno.save()])
          .then(docs => {
            return Promise.resolve(docs[1].id);
          })
          .catch(error => Promise.reject(error));
        });
      })
  },
  
  ListarTodos() {
    return usuarioRepository.ListAll();
  },

  EditarUsuario(usuarioId, {
    nascimento, genero, telefone, altura,
  }) {
    return usuarioRepository.FindById(usuarioId).then((usuario) => {
      if (nascimento && nascimento !== usuario.nascimento) {
        usuario.set({ nascimento: moment(nascimento) });
      }

      if (genero && genero !== usuario.genero) {
        usuario.set({ genero });
      }

      if (telefone && telefone !== usuario.telefone) {
        usuario.set({ telefone });
      }

      if (altura && altura !== usuario.altura) {
        usuario.set({ altura });
      }

      return usuario
        .save()
        .then(document => Promise.resolve(document))
        .catch(error => Promise.reject(error));
    });
  },

  GetUsuarioPorId(id) {
    return usuarioRepository.FindById(id);
  },

  GetAlunos(token, tokenKey) {
    return jwt.verify(token, tokenKey, (err, currentUser) => {
      if (err) return Promise.reject(err);

      const userId = currentUser.id;

      return usuarioRepository.FindById(userId).then(personal => {
        if (!personal || personal.length == 0) throw new Error("Personal não encontrado.");

        return usuarioRepository.FindAlunos({ personal: new ObjectId(personal.id.toString()) }).then(alunos => {
          return Promise.resolve(alunos.map(umAluno => new UsuarioSimplesModel(umAluno.nome, umAluno.updateAt, umAluno.medidas, umAluno.id, umAluno.genero)));
        });
      })
      .catch(error => Promise.reject(error.toString()));
    });
    
  },
};

module.exports = usuarioController;
