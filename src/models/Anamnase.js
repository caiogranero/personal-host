require("mongoose-schema-extend");
const mongoose = require("mongoose");
const User = require('./User');

const { Schema } = mongoose;

const AlunoSchema = User.extend({
  personal: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Personal"
  }
});

module.exports = mongoose.model("Aluno", AlunoSchema);
