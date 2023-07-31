// create
const register = (req, res) => {
  res.end('register')
}

// read
const view_all_user = (req, res) => {
  res.end('view all user')
}
const view_sigle_user = (req, res) => {}
res.end('view single user')

// delete
const delete_user = (req, res) => {
  res.end('delete user')
}

// update
const update_user = (req, res) => {
  res.end('update user')
}

const login = (req, res) => {
  res.end('logged in')
}
const logout = (req, res) => {
  res.end('logout')
}

module.exports = {
  register,
  view_all_user,
  view_sigle_user,
  delete_user,
  update_user,
  login,
  logout,
}
