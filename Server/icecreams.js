const Store = require('../DB/IceCream_Sechma');

// GET /courses
module.exports.index = function(request, response, next) {
  IceCream.distinct('Name')
    .then(courseIDs => response.redirect(`/icecreams/${Names[0]}`))
    .catch(error => next(error));
};

// GET /courses/:id
module.exports.retrieve = function(request, response, next) {
  const queries = [
    Course.findById(request.params.Name),
    Course.distinct('Name')
  ];

  Promise.all(queries).then(function([icecream, Names]) {
    if (course) {
      response.render('courses/index', {icecream: icecream, Names: Names});
    } else {
      next(); // No such course
    }
  }).catch(error => next(error));
};


/*
const Store = require('../DB/Store_Schema');


module.exports.index = function(request, response, next) {
  Store.distinct('_id')
    .then(storeIDs => response.redirect(`/stores/${storeIDs[0]}`))
    .catch(error => next(error));
};


module.exports.retrieve = function(request, response, next) {
  const queries = [
    Store.findById(request.params.id),
    Store.distinct('_id')
  ];

  Promise.all(queries).then(function([store, storeIDs]) {
    if (store) {
      response.render('stores/index', {store: store, storeIDs: storeIDs});
    } else {
      next();
    }
  }).catch(error => next(error));
};














*/
