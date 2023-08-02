const router = require('express').Router()
const {
  view_all_order,
  view_single_order,
  create_order,
  delete_order,
} = require('../controllers/order_controller')

// router.route('/').get(view_all_order).post(create_order)
// router
//   .route('/:id')
//   .get(view_single_order)
//   .patch(update_order)
//   .delete(delete_order)

router.get('/', view_all_order)
router.post('/', create_order)
router.get('/:id', view_single_order)
router.delete('/:id', delete_order)

module.exports = router
