// create
const create_prod = (req, res) => {
  res.send('create prod')
}

// read
const view_all_prods = (req, res) => {
  res.send('view all')
}

const view_single_prod = (req, res) => {
  res.send('view prod')
}

// update
const update_prod = (req, res) => {
  res.send('update prod')
}

// delete
const delete_prod = (req, res) => {
  res.send('delete one')
}

module.exports = {
  view_all_prods,
  view_single_prod,
  create_prod,
  update_prod,
  delete_prod,
}
