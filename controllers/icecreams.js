const IceCream = require('../DB/IceCream_Sechma');
module.exports.index = function(request, response, next) {
  IceCream.distinct('_id')
    .then(IceCreamNames => response.redirect(`/icecreams/${IceCreamNames[0]}`))
    .catch(error => next(error));
};

// GET /icecreams/:id
module.exports.retrieve = function(request, response, next) {
  const queries = [
    IceCream.findById(request.params.id),
    IceCream.distinct('_id')
  ];

  Promise.all(queries).then(function([icecream, IceCreamNames]) {
    if (icecream) {
      response.render('icecreams/index', {icecream: icecream, IceCreamNames: IceCreamNames});
    } else {
      next(); // No such course
    }
  }).catch(error => next(error));
};

// POST /icecreams (with the new ice cream in the request body)
module.exports.create = function(request, response, next) {
  IceCream.create(request.body)
    .then(icecream => response.status(201).send(icecream.id))
    .catch(error => next(error));
};

// DELETE /icecreams/:id
module.exports.delete = function(request, response, next) {
  IceCream.findByIdAndDelete(request.params.id)
    .then(icecream => icecream ? response.status(200).end() : next())
    .catch(error => next(error));
};

// PUT /icecreams/:id (with the changes in the request body)
module.exports.update = function(request, response, next) {
  IceCream.findByIdAndUpdate(request.params.id, request.body)
    .then(icecream => icecream ? response.status(200).end() : next())
    .catch(error => next(error));
};
