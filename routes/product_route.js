const router = require('express').Router()
const {
  view_all_prods,
  view_single_prod,
  create_prod,
  update_prod,
  delete_prod,
  delete_all_prod,
} = require('../controllers/product_controller')
// router.route('/').get(view_all_prods).post(create_prod)
// router
//   .route('/:id')
//   .get(view_single_prod)
//   .patch(update_prod)
//   .delete(delete_prod)

router.get('/', view_all_prods)
router.post('/', create_prod)
router.delete('/clear', delete_all_prod)
router.get('/:id', view_single_prod)
router.patch('/:id', update_prod)
router.delete('/:id', delete_prod)

module.exports = router
