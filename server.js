require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 3000

const app = express()

app.use('/', require('./routes/index_route'))
app.use('/products', require('./routes/product_route'))
app.use('/orders', require('./routes/order_route'))

const start = () => {
  try {
    require('./config/db')(process.env.MONGO_URI_COMPASS)
    app.listen(PORT, () => {
      console.log('Server Running!')
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

start()
