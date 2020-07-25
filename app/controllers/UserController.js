const User = require('../models/User')

module.exports = {
  async store (request, response) {
    try {
      const user = request.body
      await User.create(user)
      return response.status(200).send('User successsfully registered')
    } catch (error) {
      return response.status(500).send('Internal system error')
    }
  }
}
