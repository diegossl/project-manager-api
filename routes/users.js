const express = require('express')
const { verifySignUp } = require('../app/middlewares/verifySignUp')
const UserController = require('../app/controllers/UserController')

const router = express.Router()

router.post('/user/register', verifySignUp, UserController.store)

module.exports = router
