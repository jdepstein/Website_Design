const Course = require('../DB/Store_Schema');

// GET /courses
module.exports.index = function(request, response, next) {
  Course.distinct('_id')
    .then(storeIDs => response.redirect(`/stores/${storeIDs[0]}`))
    .catch(error => next(error));
};

// GET /courses/:id
module.exports.retrieve = function(request, response, next) {
  const queries = [
    Store.findById(request.params.id),
    Store.distinct('_id')
  ];

  Promise.all(queries).then(function([Store, storeIDs]) {
    if (course) {
      response.render('stores/index', {store: store, storeIDs: storeIDs});
    } else {
      next(); // No such course
    }
  }).catch(error => next(error));
};
