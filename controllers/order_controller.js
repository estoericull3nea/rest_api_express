// create
const create_order = (req, res) => {
  res.end('create order')
}

// read
const view_all_order = (req, res) => {
  res.end('view all order')
}

const view_single_order = (req, res) => {
  res.end('view single order')
}

// update
const update_order = (req, res) => {
  res.end('update order')
}

// delete
const delete_order = (req, res) => {
  res.end('delete order')
}

module.exports = {
  view_all_order,
  view_single_order,
  create_order,
  update_order,
  delete_order,
}
