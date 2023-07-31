require('dotenv').config()

const express = require('express')
const PORT = process.env.PORT || 3000
const morgan = require('morgan')
const path = require('path')
const fs = require('fs')

const app = express()

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {
  flags: 'a',
})

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Method', 'PUT, POST, PATCH, GET, DELETE')
    res.status(200).json({})
  }
  next()
})

app.use(morgan('combined', { stream: accessLogStream }))

app.use('/', require('./routes/index_route'))
app.use('/products', require('./routes/product_route'))
app.use('/orders', require('./routes/order_route'))

app.use((req, res, next) => {
  const error = new Error('Not Found!')
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    error: {
      message: error.message,
    },
  })
})

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
