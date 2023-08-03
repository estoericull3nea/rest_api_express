const Product = require('../models/product_model')
const Order = require('../models/order_model')

// create
const create_prod = async (req, res) => {
  const { name: n, description: des, price: p, quantity: q, image } = req.body
  if (!n || !des || !p) {
    res.status(400).json({
      error: 'All fields must be required!',
    })
  } else {
    const product = new Product({
      name: n,
      description: des,
      price: p,
      quantity: q,
      image: req.file.path,
    })

    await product.save()
    res.status(201).json({
      message: 'Order ' + n + ' Saved!',
      product,
    })
  }
}

// read
const view_all_prods = async (req, res) => {
  try {
    const prods = await Product.find(
      {},
      '_id name description price quantity image createdAt'
    )

    const length = prods.length

    if (!length) {
      return res.status(404).json({
        error: 'Empty Products!',
      })
    }

    if (length === 1) {
      return res.status(200).json({
        message: 'Successfully fetched product!',
        product: prods,
      })
    }

    return res.status(200).json({
      message: 'Successfully fetched products!',
      count: prods.length,
      products: prods,
    })
  } catch (error) {
    res.status(500).json({
      error: 'Something Went Wrong!',
    })
  }
}

const view_single_prod = async (req, res) => {
  try {
    const product = await Product.findById({ _id: req.params.id })
    if (!product) {
      return res.status(404).json({
        message: `No product from that ID (${req.params.id})`,
      })
    }

    res.status(200).json({
      message: `Find product with the ID (${req.params.id})`,
      product,
    })
  } catch (error) {
    res.status(500).json({
      error: 'Something Went Wrong!',
    })
  }
}

// update
const update_prod = async (req, res) => {
  try {
    const update_prod = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    )

    if (!update_prod) {
      return res.status(404).json({
        message: `No found with that ID (${req.params.id})`,
      })
    }

    res.status(200).json({
      message: `${update_prod.name} successfuly updated!`,
      update_prod,
    })
  } catch (error) {
    res.status(500).json({ message: `Something Went Wrong!` })
  }
}

// delete
const delete_prod = async (req, res) => {
  try {
    const deleted_prod = await Product.findByIdAndDelete({ _id: req.params.id })

    if (!deleted_prod) {
      return res.status(404).json({
        message: `No found with that ID (${req.params.id})`,
      })
    }

    res.status(200).json({
      message: `${deleted_prod.name} successfuly deleted!`,
      deleted_prod,
    })
  } catch (error) {
    res.status(500).json({ message: `Something Went Wrong!` })
  }
}

const delete_all_prod = async (req, res) => {
  try {
    const find_all = await Product.find({})

    if (find_all.length <= 0) {
      return res.status(404).json({ message: 'Empty Products!' })
    }

    await Product.deleteMany()
    await Order.deleteMany()

    res.status(200).json({
      message: `Successfuly Deleted All Products and Order!`,
    })
  } catch (error) {
    res.status(500).json({ message: `Something Went Wrong!` })
  }
}

module.exports = {
  view_all_prods,
  view_single_prod,
  create_prod,
  update_prod,
  delete_prod,
  delete_all_prod,
}
