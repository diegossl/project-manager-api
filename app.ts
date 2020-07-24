import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import postgresql from './config/postgresql'
import indexRouter from './routes/index'
import usersRouter from './routes/users'

const app = express()

postgresql.connection()
  .then(() => {
    console.log('Database successfully connected')
  })
  .catch(() => {
    console.log('Failed to try to connect to database')
  })

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)

export default app
