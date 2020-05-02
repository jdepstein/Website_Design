const mongoose = require('mongoose');

const IceCream = new mongoose.Schema({
  _id: {type: String, required: true, maxlength: 20, trim: true},
  flavors: [{type:String, required: true, maxlength: 25, trim: true}],
  fillings: [{type:String, maxlength: 25, trim: true}],
  description: {type:String, required: true, trim: true},
  image: {type:String, required: true, trim: true}
});




module.exports = mongoose.model('IceCream', IceCream);
