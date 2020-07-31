const express = require('express')
const { verifyToken } = require('../app/middlewares/authJwt')
const AuthController = require('../app/controllers/AuthController')

const router = express.Router()

router.post('/login', AuthController.login)
router.get('/logout', verifyToken, AuthController.logout)

module.exports = router
