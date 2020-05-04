const Store = require('../models/Store_Schema');
const IceCream = require('../models/IceCream_Schema');

// GET
module.exports.index = function(request, response, next) {
  const order = request.query.sort || '_id';

  const queries = [
    Store.find().sort(order),
    IceCream.distinct('_id')
  ];

  Promise.all(queries).then(function([stores, IceCreamNames]) {
    response.render('stores/index', {stores: stores, order: order, IceCreamNames: IceCreamNames});
  }).catch(error => next(error));
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
  request.body.icecream = request.body.fillings || [];


  Store.findByIdAndUpdate(request.params.id, request.body, {runValidators: true})
    .then(store => store ? response.status(200).end() : next())
    .catch(error => next(error));
};
