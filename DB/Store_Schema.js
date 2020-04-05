const mongoose = require('mongoose');

// Define the schema
const Store = new mongoose.Schema({
  _id: String,
  City: String,
  State: String,
  Street: String,
  Building_Number: Number,
  icecream:[String]
});

// Export the model
module.exports = mongoose.model('Store', Store);
