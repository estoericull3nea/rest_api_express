const getHomepage = (req, res) => {
  res.end('Homepage')
}

const getProfile = (req, res) => {
  res.end('Profile')
}

module.exports = {
  getHomepage,
  getProfile,
}
