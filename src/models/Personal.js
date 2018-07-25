require('mongoose-schema-extend');
const mongoose = require('mongoose');
const User = require('./User');

const {
  Schema,
} = mongoose;

const PersonalSchema = User.extend({
  alunos: {
    type: [Schema.Types.ObjectId],
    required: true,
    ref: 'Aluno',
  },
});

module.exports = mongoose.model('Personal', PersonalSchema);