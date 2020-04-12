const IceCream = require('../DB/IceCream_Sechma');

module.exports.index = function(request, response, next) {
  IceCream.distinct('_id')
    .then(IceCreamIds => response.redirect(`/icecreams/${IceCreamIds[0]}`))
    .catch(error => next(error));
};


module.exports.retrieve = function(request, response, next) {
  const queries = [
    IceCream.findById(request.params.id),
    IceCream.distinct('_id')
  ];

  Promise.all(queries).then(function([icecream, IceCreamIds]) {
    if (icecream) {
      response.render('icecreams/index', {icecream: icecream, IceCreamIds: IceCreamIds});
    } else {
      next();
    }
  }).catch(error => next(error));
};
