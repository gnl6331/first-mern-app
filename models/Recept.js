var mongoose = require('mongoose');

var ReceptSchema = new mongoose.Schema({
  title: String,
  time: String,
  persons: String,
  author: String,
  published_date: { type: Date },
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Recept', ReceptSchema);