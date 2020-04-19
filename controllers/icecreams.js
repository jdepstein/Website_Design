const IceCream = require('../DB/IceCream_Sechma');
module.exports.index = function(request, response, next) {
  IceCream.distinct('_id')
    .then(IceCreamNames => response.redirect(`/icecreams/${IceCreamNames[0]}`))
    .catch(error => next(error));
};

// GET /courses/:id
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
