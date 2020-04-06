const express = require('express');
const icecreams = require('./Server/icecreams');
const stores = require('./Server/stores');

// Create the router
const router = express.Router();

// Handle course requests
router.get('/stores', stores.index);
router.get('/stores/:id', stores.retrieve);

// Handle section requests
router.get('/icecreams', icecreams.index);

// Export the router
module.exports = router;
