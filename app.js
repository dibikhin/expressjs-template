// Express App

var admin = require('sriracha-admin');

var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

// TODO use "./"
var routes = require('routes/routes');
var sample = require('routes/sample');
var middleware = require('infra/middleware');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use('/admin', admin());

// TODO refactor routes' submition
var handlers = {
    sample: sample
};
routes.setup(app, handlers);

// TODO broken, use 4 params from http://expressjs.com/en/guide/error-handling.html
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
