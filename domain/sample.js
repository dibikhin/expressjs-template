var _ = require('underscore');

function do_work(params, callback) {
    params = params || {};
    callback = _.isFunction(callback) ? callback : _.noop;

    if (!is_valid(params)) {
        return callback('some error');
    }
    var result = params.from + ' to ' + params.to;
    return callback(null, result);
}

module.exports = {
    do_work: do_work
};

// TODO use validation lib or something
function is_valid(params) {
    if (!params.from || !params.to ||
        !_.isObject(params) || !_.isString(params.from) || !_.isString(params.to)) {
        return false;
    }
    return true;
}
