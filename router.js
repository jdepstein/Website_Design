const express = require('express');
const icecreams = require('./Server/icecreams');
const stores = require('./Server/stores');

// Create the router
const router = express.Router();


router.get('/stores', stores.index);
router.get('/stores', stores.retrieve);


router.get('/icecreams', icecreams.index);

// Export the router
module.exports = router;
