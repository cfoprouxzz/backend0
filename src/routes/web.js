const express = require('express');
const { getHomepage, getAbc, getAihoi } = require('../controllers/homeController')
const router = express.Router()

// router.Method('/route', handler)

router.get('/', getHomepage);

router.get('/abc', getAbc);

router.get('/aihoi', getAihoi);

module.exports = router; // export default