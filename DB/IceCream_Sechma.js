const mongoose = require('mongoose');

const IceCream = new mongoose.Schema({
  Name: String,
  flavor: [String],
  fillings: [String],
  description: String,
  Price:[(String, Number)],
  Calories: Number,
  Locations:[String]
});


module.exports = mongoose.model('IceCream', IceCream);
