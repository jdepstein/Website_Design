const express = require('express');
const icecreams = require('./Server/icecreams');
const stores = require('./Server/stores');

// Create the router
const router = express.Router();


router.get('/stores', stores.index);
router.get('/icecreams', icecreams.index);
router.get('/icecreams/:Name', icecreams.retrieve);

// Export the router
module.exports = router;
