const Store = require('../DB/Store_Schema');


module.exports.index = function(request, response, next) {
  const order = request.query.sort || '_id'; // Default to sort by course

  Store.find().sort(order)
    .then(stores => response.render('stores/index', {stores: stores, order: order}))
    .catch(error => next(error));
};
