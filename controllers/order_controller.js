const Order = require('../models/order_model')
const Product = require('../models/product_model')

// create
const create_order = async (req, res) => {
  try {
    const { productId } = req.body
    const find_prod = await Product.findById({ _id: productId })

    if (!find_prod) {
      return res
        .status(404)
        .json({ message: `No found with that ID ${productId}` })
    } else {
      const order = new Order({
        productId,
      })

      await order.save()
      res.status(201).json({
        message: 'Order Created!',
        OrderDetails: {
          _id: order._id,
          ProductID: order.productId,
          OrderTime: order.orderTime,
        },
      })
    }
  } catch (error) {
    res.status(500).json({
      error: 'Something Went Wrong!',
    })
  }
}

// read
const view_all_order = async (req, res) => {
  try {
    const find_all = await Order.find()
    if (find_all.length === 0) {
      return res.status(404).json({ message: `Empty Order!` })
    }
    res.status(200).json({
      message: 'Order Fetched!',
      Orders: find_all,
    })
  } catch (error) {
    res.status(500).json({
      error: 'Something Went Wrong!',
    })
  }
}

const view_single_order = async (req, res) => {
  try {
    const find_one = await Order.findById({ _id: req.params.id })
    if (!find_one) {
      return res
        .status(404)
        .json({ message: `No found with that ID ${req.params.id}` })
    }

    res.status(201).json({
      message: `Order found with the ID ${req.params.id}`,
      find_one,
    })
  } catch (error) {
    res.status(500).json({
      error: 'Something Went Wrong!',
    })
  }
}

// delete
const delete_order = async (req, res) => {
  try {
    const find_one = await Order.findByIdAndDelete({ _id: req.params.id })
    if (!find_one) {
      return res
        .status(404)
        .json({ message: `No found with that ID ${req.params.id}` })
    }

    res.status(201).json({
      message: `Order with the ID ${req.params.id} Deleted!`,
    })
  } catch (error) {
    res.status(500).json({
      error: 'Something Went Wrong!',
    })
  }
}

module.exports = {
  view_all_order,
  view_single_order,
  create_order,
  delete_order,
}
