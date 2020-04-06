const Section = require('../DB/IceCream_Sechma');

// GET /sections?sort=
module.exports.index = function(request, response, next) {
  const order = request.query.sort || 'Name'; // Default to sort by course

  Section.find().sort(order)
    .then(icecreams => response.render('icecreams/index', {icecreams: icecreams, order: order}))
    .catch(error => next(error));
};
