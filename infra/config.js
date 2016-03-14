var yaml_config = require('node-yaml-config');
var config = yaml_config.load('config.yml');

module.exports = config;
