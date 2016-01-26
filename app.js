// Express App

var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

var routes = require('./routes/routes');
var index = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());

// TODO '/smoketest' w/ supertest
var handlers = {
    index: index
};

routes.setup(app, handlers);

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
// TODO move 'em to a file

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
