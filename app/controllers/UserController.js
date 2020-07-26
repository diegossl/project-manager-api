const User = require('../models/User')
const bcrypt = require('bcryptjs')

module.exports = {
  async store (request, response) {
    try {
      const { email, username, password } = request.body
      const salt = await bcrypt.genSalt()
      const passwordHash = await bcrypt.hash(password, salt)
      const user = {
        email: email,
        username: username,
        password: passwordHash
      }
      await User.create(user)
      return response.status(200).send('User successsfully registered')
    } catch (error) {
      return response.status(500).send('Internal server error')
    }
  }
}
