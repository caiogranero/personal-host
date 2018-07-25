const mongoose = require('mongoose');

const {
  Schema,
} = mongoose;

const baseOptions = {
  discriminatorKey: '_type',
};

const entitySchema = new Schema({
  _createdAt: {
    type: Date,
    default: Date.now,
  },
  _updateAt: {
    type: Date,
    default: Date.now,
  },
  _inactive: {
    typ: Boolean,
    default: false,
  },
}, baseOptions);

module.exports = entitySchema;
