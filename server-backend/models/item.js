const mongoose=require('mongoose');

const unique_validator = require('mongoose-unique-validator');

const item_schema = mongoose.Schema({
  'item' : {type:String,require:true,unique:true},
  'detail': { type: String, require: true },
  'quantity': { type: String, require: true },
  'location': { type: String, require: true },
  'status' : {type:Number,require:true,default:0},
});

item_schema.plugin(unique_validator);

module.exports = mongoose.model('mitems',item_schema);