const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
  url: String,
  title: String
});

const Music = mongoose.model('Music', musicSchema);

module.exports = Music;