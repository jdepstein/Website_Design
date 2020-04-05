const express = require('express');
const icecreams = require('./Server/icecreams');
const stores = require('./Server/stores');

// Create the router
const router = express.Router();

// Handle course requests
router.get('/stores', courses.index);
router.get('/stores/:id', courses.retrieve);

// Handle section requests
router.get('/icecreams', sections.index);

// Export the router
module.exports = router;
