const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

const usersRouter = require('./routes/users')
const projectsRouter = require('./routes/projects')
const authRouter = require('./routes/auth')

require('./database')

const app = express()

app.use(cors())

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(usersRouter)
app.use(projectsRouter)
app.use(authRouter)

module.exports = app
