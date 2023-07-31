const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const UserModel = require('../models/user_model')
const { create_token } = require('../config/auth')

// create
const register = async (req, res) => {
  const { username, email, password, confirm_password } = req.body

  const user = await UserModel.findOne({ email })

  if (!email || !password || !confirm_password) {
    res.status(400).json({ error: `All field are required!` })
  } else if (password.length < 8) {
    res.status(400).json({ error: `Password must be atleast 8 characters!` })
  } else if (user) {
    res
      .status(409)
      .json({ error: `${email} already registered, please login in!` })
  } else if (password !== confirm_password) {
    res.status(400).json({ error: `Email or password incorrect!` })
  } else {
    const hashedPass = await bcrypt.hash(password, 12)
    const user = new UserModel({
      email,
      username,
      password: hashedPass,
    })
    await user.save()
    res.status(202).json({ message: `Registered!` })
  }
}

// read
const view_all_user = (req, res) => {
  res.end('view all user')
}
const view_sigle_user = (req, res) => {
  res.end('view single user')
}

// delete
const delete_user = (req, res) => {
  res.end('delete user')
}

// update
const update_user = (req, res) => {
  res.end('update user')
}

const login = async (req, res) => {
  res.clearCookie('access_token')

  const { email, password } = req.body
  const user = await UserModel.findOne({ email })

  if (!email || !password) {
    res.status(400).json({ error: `Please Input email and password!` })
  } else if (password <= 7) {
    res.status(400).json({ error: `Password must be atleast 8 characters!` })
  } else if (!user) {
    res
      .status(409)
      .json({ error: `${email} not registered, please register first` })
  } else {
    const if_match = await bcrypt.compare(password, user.password)
    if (!if_match) res.json({ error: `Email or password is incorrect!` })

    const access_token = create_token(user)
    res.cookie('access_token', access_token, {
      maxAge: 3600000, // 1hr
      httpOnly: true,
      secure: true,
    })
    res.status(200).json({ message: `Logged In!` })
  }
}
const logout = (req, res) => {
  res.clearCookie('access_token')
  res.status(200).json({ message: `Logged Out!` })
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
