const mongoose = require('mongoose');

// Define the schema
const Store = new mongoose.Schema({
  _id: String,
  city: String,
  state: String,
  street: String,
  building_number: Number,
  icecream:[String]
});

// Export the model
module.exports = mongoose.model('Store', Store);
