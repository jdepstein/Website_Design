const mongoose = require('mongoose');

// Define the schema
const About = new mongoose.Schema({
  description: String,
});

// Export the model
module.exports = mongoose.model('About', About);
