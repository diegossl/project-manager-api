const express = require('express')
const { verifyToken } = require('../app/middlewares/authJwt')
const ProjectController = require('../app/controllers/ProjectController')

const router = express.Router()

router.get('/project/list', verifyToken, ProjectController.index)
router.post('/project/register', verifyToken, ProjectController.store)
router.get('/project/:id', verifyToken, ProjectController.getProject)
router.put('/project/update/:id', verifyToken, ProjectController.update)
router.delete('/project/delete/:id', verifyToken, ProjectController.destroy)

module.exports = router
