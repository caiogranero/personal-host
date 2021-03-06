require('mongoose-schema-extend');
const mongoose = require('mongoose');
const User = require('./User');

const { Schema } = mongoose;

const PersonalSchema = User.extend({
  alunos: {
    type: [Schema.Types.ObjectId],
    required: true,
    ref: 'Aluno'
  },
  code: {
    type: String,
    required: true
  }
});

const PersonalModel = mongoose.model('Personal', PersonalSchema);

module.exports = PersonalModel;
