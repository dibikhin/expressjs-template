#!/usr/bin/env node

// Server
// http://127.0.0.1:3000

var debug = require('debug')('expressjs-template:server');
var http = require('http');

var app = require('app');
var helpers = require('infra/helpers');
var config = require('infra/config');

var port = helpers.normalizePort(process.env.PORT || config.port);
console.log(port);
app.set('port', port);

var server = http.createServer(app);

server.listen(port);
server.on('error', helpers.onError);
server.on('listening', onListening);

function onListening() {
    var addr = server.address();
    var bind = helpers.determine_bind(addr.port);
    debug('Listening on ' + bind);
}
