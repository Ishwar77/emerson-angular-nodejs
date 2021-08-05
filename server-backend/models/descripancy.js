const mongoose = require('mongoose');

const unique_validator = require('mongoose-unique-validator');

const mrir_schema = mongoose.Schema({
  "name": { type: String, require: true, unique: true },
  "vendercode": { type: String, require: true },
  "mrir": { type: String, require: true },
  "date": { type: String, require: true },
  'description': { type: String, require: true },
  'quantity': { type: String, require: true },
  'location': { type: String, require: true },
  'status': { type: Number, require: true, default: 0 }
});

mrir_schema.plugin(unique_validator);

module.exports = mongoose.model('descreporet', mrir_schema);