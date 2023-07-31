const router = require('express').Router()
const { getHomepage, getProfile } = require('../controllers/index_controller')

router.get('/', getHomepage)
router.get('/profile', getProfile)

module.exports = router
