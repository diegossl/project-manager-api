const express = require('express')
const { verifySignUp } = require('../app/middlewares/verifySignUp')
const { verifyToken } = require('../app/middlewares/authJwt')
const UserController = require('../app/controllers/UserController')

const router = express.Router()

router.get('/user/list', verifyToken, UserController.index)
router.post('/user/register', verifySignUp, UserController.store)
router.get('/user/:id', verifyToken, UserController.getUser)
router.put('/user/update/:id', verifyToken, UserController.update)
router.delete('/user/delete/:id', verifyToken, UserController.destroy)

module.exports = router
