const jwt = require('jsonwebtoken')
const auth = require('../../config/auth')

module.exports = {
  verifyToken (request, response, next) {
    const token = request.headers.token

    if (!token) {
      return response.status(403).send({ message: 'No token provided' })
    }

    const result = jwt.verify(token, auth.secretKey)

    if (!result) {
      return response.status(401).send({ message: 'Unauthorized' })
    }

    request.body.email = result.email

    next()
  }
}
