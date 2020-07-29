const express = require('express')
const AuthController = require('../app/controllers/AuthController')

const router = express.Router()

router.post('/login', AuthController.login)
router.get('/logout', AuthController.logout)

module.exports = router
