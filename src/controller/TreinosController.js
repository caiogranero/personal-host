/* eslint no-param-reassign: ["error", { "props": false }] */

const Treino = require('../models/Treino');
const TokenController = require('../controller/TokenController');
const TreinoRepository = require('../repository/TreinoRepository');

const controller = {
  NovoTreino(alunoId, { nome, objetivo, observacao, dataInicio, dataFinal }, token, tokenKey) {
    TokenController.Decode(token, tokenKey).then(currentUser => {
      // TODO: Validar se objetivo existe.
      if (currentUser.type !== 'Personal') {
        throw new Error(`${currentUser.name} não é um personal.`);
      }

      const treino = new Treino({
        personal: currentUser.id,
        aluno: alunoId,
        dataFinal: dataFinal,
        dataInicio: dataInicio,
        observacao: observacao,
        objetivo: objetivo,
        nome: nome
      });

      treino
        .save()
        .then(document => Promise.resolve(document))
        .catch(error => Promise.reject(error));
    });
  },

  GetTreino(alunoId, treinoId) {
    return TreinoRepository.Find(alunoId, treinoId, {});
  },

  NovoGrupo(alunoId, treinoId) {}
};

module.exports = controller;
