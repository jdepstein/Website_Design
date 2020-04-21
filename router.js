const express = require('express');
const icecreams = require('./controllers/icecreams');
const stores = require('./controllers/stores');
const aboutus = require('./controllers/aboutus');

// Create the router
const router = express.Router();

// Check for admin status
const authorize = function(request, response, next) {
  if (request.session.admin) {
    next(); // Fulfill the request
  } else {
    response.status(401).end();
  }
};

// Handle store requests
router.get('/stores', stores.index);
router.post('/stores', authorize, stores.create);
router.delete('/stores/:id', authorize, stores.delete);
router.put('/stores/:id', authorize, stores.update);


// Handle ice cream requests
router.get('/icecreams', icecreams.index);
router.get('/icecreams/:id', icecreams.retrieve);
router.post('/icecreams', authorize, icecreams.create);
router.delete('/icecreams/:id', authorize, icecreams.delete);
router.put('/icecreams/:id', authorize, icecreams.update);


// Handle store requests
router.get('/aboutus', aboutus.index);
//router.post('/aboutus', authorize, aboutus.create);
//router.delete('/aboutus/:id', authorize, aboutus.delete);
//router.put('/aboutus/:id', authorize, aboutus.update);

// Export the router
module.exports = router;
