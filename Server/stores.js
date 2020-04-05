const Course = require('../DB/Store_Schema');

// GET /courses
module.exports.index = function(request, response, next) {
  Course.distinct('_id')
    .then(courseIDs => response.redirect(`/stores/${courseIDs[0]}`))
    .catch(error => next(error));
};

// GET /courses/:id
module.exports.retrieve = function(request, response, next) {
  const queries = [
    Course.findById(request.params.id),
    Course.distinct('_id')
  ];

  Promise.all(queries).then(function([Store, storeIDs]) {
    if (course) {
      response.render('stores/index', {Store: Store, courseIDs: storeIDs});
    } else {
      next(); // No such course
    }
  }).catch(error => next(error));
};
