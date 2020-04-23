const mongoose = require('mongoose');

const IceCream = new mongoose.Schema({
  _id: String,
  Name: String,
  flavor: [String],
  fillings: [String],
  description: String,
  image: String
});


module.exports = mongoose.model('IceCream', IceCream);
