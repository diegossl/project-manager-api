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

    console.log(result.email)
    console.log(result.password)

    request.body.email = result.email
    request.body.password = result.password

    next()
  }
}
