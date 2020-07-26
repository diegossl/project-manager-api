const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth = require('../../config/auth')

module.exports = {
  async login (request, response) {
    try {
      const { email, password } = request.body
      const user = await User.findOne({ where: { email: email } })
      const passwordIsValid = await bcrypt.compare(password, user.password)

      if (passwordIsValid) {
        const token = jwt.sign({ email: email }, auth.secretKey, { expiresIn: '1h' })
        return response.status(200).send({ token: token })
      }

      return response.status(401).send('Unauthorized')
    } catch (error) {
      return response.status(500).send('Internal server error')
    }
  }
}
