var mongoose = require('mongoose');

// TODO move to config
mongoose.connect('mongodb://testuser:testpass@ds039311.mongolab.com:39311/heroku_app35034272');

module.exports = mongoose;