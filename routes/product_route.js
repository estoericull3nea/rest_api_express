const router = require('express').Router()
const {
  view_all_prods,
  view_single_prod,
  create_prod,
  update_prod,
  delete_prod,
  delete_all_prod,
} = require('../controllers/product_controller')

const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '_' + file.originalname)
  },
})

const file_filter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png')
    cb(null, true)
  else cb(null, false)
}

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // 5mb
  },
  file_filter,
})

router.get('/', view_all_prods)
router.post('/', upload.single('image'), create_prod)
router.delete('/clear', delete_all_prod)
router.get('/:id', view_single_prod)
router.patch('/:id', update_prod)
router.delete('/:id', delete_prod)

module.exports = router
