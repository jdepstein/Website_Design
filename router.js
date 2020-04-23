const express = require('express');
const icecreams = require('./controllers/icecreams');
const stores = require('./controllers/stores');
const aboutus = require('./controllers/aboutus');

// Create the router
const router = express.Router();


// Handle store requests
router.get('/stores', stores.index);



// Handle ice cream requests
router.get('/icecreams', icecreams.index);
router.get('/icecreams/:id', icecreams.retrieve);



// Handle store requests
router.get('/aboutus', aboutus.index);
//router.post('/aboutus', authorize, aboutus.create);
//router.delete('/aboutus/:id', authorize, aboutus.delete);
//router.put('/aboutus/:id', authorize, aboutus.update);

// Export the router
module.exports = router;
