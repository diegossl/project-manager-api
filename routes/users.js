const express = require('express')
const UserController = require('../app/controllers/UserController')

const router = express.Router()

router.post('/user/register', UserController.index)

module.exports = router
