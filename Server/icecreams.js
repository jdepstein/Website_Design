const IceCream = require('../DB/IceCream_Sechma');

module.exports.index = function(request, response, next) {
  const order = request.query.sort || 'Name';

  Section.find().sort(order)
    .then(icecreams => response.render('icecreams/index', {icecreams: icecreams, order: order}))
    .catch(error => next(error));
};


module.exports.retrieve = function(request, response, next) {
  const queries = [
    IceCream.findById(request.params.id),
    IceCream.distinct('_id')
  ];


};
