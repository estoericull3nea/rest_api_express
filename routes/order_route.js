const router = require('express').Router()
const {
  view_all_order,
  view_single_order,
  create_order,
  delete_order,
} = require('../controllers/order_controller')
const { validate_token } = require('../config/auth')

// router.route('/').get(view_all_order).post(create_order)
// router
//   .route('/:id')
//   .get(view_single_order)
//   .patch(update_order)
//   .delete(delete_order)

router.get('/', validate_token, view_all_order)
router.post('/', validate_token, create_order)
router.get('/:id', validate_token, view_single_order)
router.delete('/:id', validate_token, delete_order)

module.exports = router
