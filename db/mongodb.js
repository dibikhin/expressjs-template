var mongoose = require('mongoose');
var config = require('infra/config');

mongoose.connect(config.db_url);

module.exports = mongoose;