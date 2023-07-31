const router = require('express').Router()
const {
  register,
  view_all_user,
  view_sigle_user,
  update_user,
  delete_user,
  login,
  logout,
} = require('../controllers/user_controller')

// router.route('/').post(register).get(view_all_user).post(login).post(logout)
// router.route('/:id').get(view_sigle_user).patch(update_user).delete(delete_user)

router.get('/', view_all_user)
router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)

router.get('/:id', view_sigle_user)
router.patch('/:id', update_user)
router.delete('/:id', delete_user)

module.exports = router
