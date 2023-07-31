const router = require('express').Router()
const {
  view_all_prods,
  view_single_prod,
  create_prod,
  update_prod,
  delete_prod,
} = require('../controllers/product_controller')
router.route('/').get(view_all_prods).post(create_prod)
router
  .route('/:id')
  .get(view_single_prod)
  .patch(update_prod)
  .delete(delete_prod)
module.exports = router
