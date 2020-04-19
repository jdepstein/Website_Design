const Store = require('../models/Store_Schema');


module.exports.index = function(request, response, next) {
  const order = request.query.sort || '_id';

  Store.find().sort(order)
    .then(stores => response.render('stores/index', {stores: stores, order: order}))
    .catch(error => next(error));
};

// POST /stores (with the new section in the request body)
module.exports.create = function(request, response, next) {
  Store.create(request.body)
    .then(stores => response.status(201).send(section.id))
    .catch(error => next(error));
};

// DELETE /stores/:id
module.exports.delete = function(request, response, next) {
  Store.findByIdAndDelete(request.params.id)
    .then(stores => stores ? response.status(200).end() : next())
    .catch(error => next(error));
};

// PUT /stores/:id (with the changes in the request body)
module.exports.update = function(request, response, next) {
  Store.findByIdAndUpdate(request.params.id, request.body)
    .then(stores => stores ? response.status(200).end() : next())
    .catch(error => next(error));
};
