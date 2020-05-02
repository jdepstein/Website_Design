const Store = require('../models/Store_Schema');

module.exports.index = function(request, response, next) {
  const order = request.query.sort || '_id';

  Store.find().sort(order)
    .then(stores => response.render('stores/index', {stores: stores, order: order}))
    .catch(error => next(error));
};

// POST
module.exports.create = function(request, response, next) {
  Store.create(request.body)
    .then(store => response.status(201).send(store.id))
    .catch(error => next(error));
};

// DELETE
module.exports.delete = function(request, response, next) {
  Store.findByIdAndDelete(request.params.id)
    .then(store => store ? response.status(200).end() : next())
    .catch(error => next(error));
};

// PUT
module.exports.update = function(request, response, next) {

  Store.findByIdAndUpdate(request.params.id, request.body, {runValidators: true})
    .then(store => store ? response.status(200).end() : next())
    .catch(error => next(error));
};
