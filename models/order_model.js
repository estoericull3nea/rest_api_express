const mongoose = require('mongoose')
const OrderSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  orderTime: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Order', OrderSchema)
