
const Store = require('../models/About_Schema');


module.exports.index = function(request, response, next) {
  const order = request.query.sort || 'descrpition';

  About.find().sort(order)
    .then(aboutus => response.render('aboutus/index', {aboutus: aboutus, order: order}))
    .catch(error => next(error));
};
