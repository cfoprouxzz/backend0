const express = require('express');
const { getHomepage, getAbc, getAihoi, postCreateUser, getCreatePage } = require('../controllers/homeController')
const router = express.Router()

// router.Method('/route', handler)

router.get('/', getHomepage);

router.get('/abc', getAbc);

router.get('/aihoi', getAihoi);

router.get('/create', getCreatePage);

router.post('/create-user', postCreateUser);

module.exports = router; // export default