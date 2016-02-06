function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var port = normalizePort(process.env.PORT || '3000');
    var bind = determine_bind(port);

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function determine_bind(port) {
    return typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
}

module.exports = {
    normalizePort: normalizePort,
    onError: onError,
    determine_bind: determine_bind
};
