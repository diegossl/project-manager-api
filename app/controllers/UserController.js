const User = require('../models/User')
const bcrypt = require('bcryptjs')

module.exports = {
  async index (request, response) {
    try {
      const users = await User.findAll()
      return response.status(200).send(users)
    } catch (error) {
      return response.status(500).send('Internal server error')
    }
  },

  async getUser (request, response) {
    try {
      const userId = request.params.id
      const user = await User.findOne({ where: { id: userId } })
      return response.status(200).send(user)
    } catch (error) {
      return response.status(500).send('Internal server error')
    }
  },

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
  },

  async update (request, response) {
    try {
      const userId = request.params.id
      const userData = request.body
      await User.update(userData, { where: { id: userId } })
      return response.status(200).send('User successsfully updated')
    } catch (error) {
      return response.status(500).send('Internal server error')
    }
  },

  async destroy (request, response) {
    try {
      const userId = request.params.id
      await User.destroy({ where: { id: userId } })
      return response.status(200).send('User successsfully deleted')
    } catch (error) {
      return response.status(500).send('Internal server error')
    }
  }
}
