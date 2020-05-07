const mongoose = require('mongoose');

const IceCream = new mongoose.Schema({
  _id: {type: String, required: true, maxlength: 30, trim: true},
  flavors: [{type:String, required: true, maxlength: 25, trim: true}],
  fillings: [{type:String, maxlength: 25, trim: true}],
  description: {type:String, trim: true},
  image: {type:String,  trim: true}
});

// Clean up icecreams when a store is deleted
IceCream.post('findOneAndDelete', function(icecream) {
  const queries = [
    mongoose.model('Store').updateMany({icecream: icecream.id}, {$pull: {icecream: icecream.id}})
  ];
  Promise.all(queries).catch(error => next(error));
});

module.exports = mongoose.model('IceCream', IceCream);
