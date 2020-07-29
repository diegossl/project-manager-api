const express = require('express')
const { verifyToken } = require('../app/middlewares/authJwt')
const ProjectController = require('../app/controllers/ProjectController')

const router = express.Router()

router.post('/project/register', verifyToken, ProjectController.store)

module.exports = router
