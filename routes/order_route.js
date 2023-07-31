const router = require('express').Router()
const {
  view_all_order,
  view_single_order,
  create_order,
  update_order,
  delete_order,
} = require('../controllers/order_controller')

router.route('/').get(view_all_order).post(create_order)
router
  .route('/:id')
  .get(view_single_order)
  .patch(update_order)
  .delete(delete_order)

module.exports = router
