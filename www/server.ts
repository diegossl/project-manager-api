import app from '../app'
import debug from 'debug'
import http, { Server } from 'http'

const port = '3000'

app.set('port', '3000')

const server: Server = http.createServer(app)

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

function onError (error: { syscall: string; code: unknown; }) {
  if (error.syscall !== 'listen') {
    throw error
  }
  const bind: string = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
    default:
      throw error
  }
}

function onListening () {
  const addr = server.address()
  const bind: string = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr?.port
  debug('Listening on ' + bind)
}
