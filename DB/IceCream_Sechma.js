const mongoose = require('mongoose');

// Define the schema
const IceCream = new mongoose.Schema({
  Name: String,
  flavor: [String],
  fillings: [String],
  description: String,
  Price:[(String, Number)],
  Calories: Number,
  Locations:[String]
});

// Export the model
module.exports = mongoose.model('IceCream', IceCream);
