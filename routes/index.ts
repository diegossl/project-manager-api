import express, { Router } from 'express'

const router: Router = express.Router()

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

export default router
