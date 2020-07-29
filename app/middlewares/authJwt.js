const jwt = require('jsonwebtoken')
const auth = require('../../config/auth')

module.exports = {
  async verifyToken (request, response, next) {
    var credentials = null
    try {
      const token = request.headers.token
      if (!token) {
        return response.status(400).send({ message: 'No token provided' })
      }
      credentials = jwt.verify(token, auth.secretKey)
    } catch (error) {
      return response.status(400).send({ message: 'Invalid token' })
    }

    request.body.email = credentials.email

    next()
  }
}
