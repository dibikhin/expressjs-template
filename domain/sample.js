"use strict";

var _ = require('underscore');

function do_work(params, callback) {
    params = params || {};
    callback = _.isFunction(callback) ? callback : _.noop;

    var result;

    if (!is_valid(params)) {
        return callback('some error');
    }

    result = params.from + ' to ' + params.to;
    return callback(null, result);
}


// TODO use validation lib or something
function is_valid(params) {
    if (!params.from || !params.to ||
        !_.isObject(params) || !_.isString(params.from) || !_.isString(params.to)) {
        return false;
    }
    return true;
}

module.exports = {
    do_work: do_work
};
