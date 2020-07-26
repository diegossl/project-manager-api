const User = require('../models/User')

module.exports = {
  async verifySignUp (request, response, next) {
    const { email } = request.body
    const user = await User.findOne({ where: { email: email } })

    if (user) {
      return response.status(400).send({ message: 'Email is already in use' })
    }

    next()
  }
}
