const express = require('express');
const icecreams = require('./Server/icecreams');
const stores = require('./Server/stores');

// Create the router
const router = express.Router();


router.get('/stores', stores.index);


// Handle course requests
router.get('/icecreams', icecreams.index);
router.get('/icecreams/:id', icecreams.retrieve);

//router.get('/aboutus', aboutus.index);

// Export the router
module.exports = router;
