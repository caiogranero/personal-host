/* eslint no-param-reassign: ["error", { "props": false }] */

const usuarioFactory = require('../factories/UsuarioFactory');
const usuarioRepository = require('../repository/UsuarioRepository');
const moment = require('moment');
const jwt = require('jsonwebtoken');
const ObjectId = (require('mongoose').Types.ObjectId);

const usuarioController = {
  CreateUsuario({nome, senha, email, code}) {
    if (code) {
      return usuarioController.CreateAluno({nome, senha, email, code});
    } else {
      return usuarioController.CreatePersonal({nome, senha, email});
    }
  },

  CreatePersonal({
    nome, senha, email
  }) {
    return usuarioRepository.FindUser({ email }).then(user => {
      if (user && user.length > 0) throw new Error("Email já cadastrado.");
      
      const usuario = usuarioFactory.CreatePersonal(nome, senha, email);

      return usuario
        .save()
        .then(document => Promise.resolve(document.id))
        .catch(error => Promise.reject(error));
    })
  },

  CreateAluno({
    nome, senha, email, code
  }) {
    return usuarioRepository.FindUser({ email }).then(user => {
      if (user && user.length > 0) throw new Error("Email já cadastrado.");
      
      return usuarioRepository.GetPersonalByCode(code).then(personal => {
        if (!personal || personal.length === 0) throw new Error("Personal não encontrado.");

        const aluno = usuarioFactory.CreateAluno(nome, senha, email, personal[0].id);

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

      return usuarioRepository.FindById(userId).then(usuario => {
        return Promise.resolve(usuarioRepository.FindAlunos({ personal: new ObjectId(usuario.id.toString()) }));
      })
      .catch(error => Promise.reject("Personal não encontrado."));
    });
    
  },
};

module.exports = usuarioController;
