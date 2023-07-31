const router = require('express').Router()
const { getHomepage, getProfile } = require('../controllers/index_controller')
const { validate_token } = require('../config/auth')

router.get('/', getHomepage)
router.get('/profile', validate_token, getProfile)

module.exports = router
