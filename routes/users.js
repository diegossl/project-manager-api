const express = require('express')
const { verifySignUp } = require('../app/middlewares/verifySignUp')
const UserController = require('../app/controllers/UserController')
const AuthController = require('../app/controllers/AuthController')

const router = express.Router()

router.post('/user/register', verifySignUp, UserController.store)
router.post('/user/login', AuthController.login)

module.exports = router
