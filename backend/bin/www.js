const { conn } = require('../db.js');
const app = require('../app');
const debug = require('debug')('balanz:server');
const http = require('http');

let port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);
const force = (process.env.FORCE || false)

conn.sync({force}).then(() =>
server.on('error', onError),
server.on('listening', onListening),
server.listen(port)
)
.then(() => console.log(`Working in ${port}`))
.catch(err => console.log(err))

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
