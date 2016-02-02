#!/usr/bin/env node

// Server
// http://127.0.0.1:3000

var debug = require('debug')('expressjs-template:server');
var http = require('http');

var app = require('app');
var helpers = require('infra/helpers');

var port = helpers.normalizePort(process.env.PORT || '3000');
app.set('port', port);

var server = http.createServer(app);

server.listen(port);
server.on('error', helpers.onError);
server.on('listening', onListening);

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
