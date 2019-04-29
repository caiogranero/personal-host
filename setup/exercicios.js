const mongoose = require('mongoose');
const Exercicio = require('../src/models/Exercicio');
const musculos = require('../src/models/Musculos');
const fs = require('fs');

Object.keys(object).forEach(element => {
  const arquivo = element.toLowerCase();

  const file = JSON.parse(fs.readFileSync('./exercicios/'+arquivo+'.json', 'utf8'));

  file.forEach(element => {
    const observacoes = []
    element.topicos.forEach(x => {
      observacoes.push(x);
    })

    let exe = new Exercicio({
      nome: element.nome,
      imagem: element.imagem,
      descricao: element.descricao,
      observacoes: observacoes,
      musculo: element[object]
    })

    console.log(exe);
  });
});