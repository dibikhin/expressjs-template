// Express App

var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

var routes = require('./routes/routes');
var sample = require('./routes/sample');
var middleware = require('./infra/middleware');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());

// TODO '/smoketest' w/ supertest
var handlers = {
    sample: sample
};

routes.setup(app, handlers);

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
if (app.get('env') === 'development') {
    app.use(middleware.dev_handle_error);
}

app.use(middleware.prod_handle_error);

module.exports = app;
