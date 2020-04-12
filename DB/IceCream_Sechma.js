const mongoose = require('mongoose');

const IceCream = new mongoose.Schema({
  _id: String,
  flavor: [String],
  fillings: [String],
  description: String,
  Price:[(String, Number)],
  Calories: Number,
  Locations:[String]
});


module.exports = mongoose.model('IceCream', IceCream);
