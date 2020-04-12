const Store = require('../DB/Store_Schema');


module.exports.index = function(request, response, next) {
  const order = request.query.sort || '_id'; // Default to sort by course

  Store.find().sort(order)
    .then(stores => response.render('stores/index', {stores: stores, order: order}))
    .catch(error => next(error));
};











/*const Store = require('../DB/Store_Schema');


module.exports.index = function(request, response, next) {
  Store.distinct('_id')
    .then(storeIDs => response.redirect(`/stores/${storeIDs[0]}`))
    .catch(error => next(error));
};


module.exports.retrieve = function(request, response, next) {
  const queries = [
    Store.findById(request.params.id),
    Store.distinct('_id')
  ];

  Promise.all(queries).then(function([store, storeIDs]) {
    if (store) {
      response.render('stores/index', {store: store, storeIDs: storeIDs});
    } else {
      next();
    }
  }).catch(error => next(error));
};*/
