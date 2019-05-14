const mongoose = require('mongoose');
const Exercicio = require('../src/models/Exercicio');
const musculos = require('../src/models/Musculos');
const fs = require('fs');
const environment = require('../src/config/environment');

const config = environment.getSetup('development');

mongoose.connect(config.db.uri, {dbName: 'personal'});
mongoose.Promise = global.Promise;

Object.keys(musculos).forEach(element => {
  const arquivo = element.toLowerCase();

  const file = JSON.parse(fs.readFileSync('./exercicios/'+arquivo+'.json', 'utf8'));

  file.forEach(element => {
    const observacoes = []
    element.topicos.forEach(x => {
      observacoes.push(x);
    })

    const nameCapitalized = arquivo.charAt(0).toUpperCase() + arquivo.slice(1)

    const entity = new Exercicio({
      nome: element.nome,
      imagem: element.imagem,
      descricao: element.descricao,
      observacoes: observacoes,
      musculo: musculos[nameCapitalized]
    })

    entity
      .save()
      .then(document => console.log(document.id))
      .catch(error => console.log(error));
  });
});