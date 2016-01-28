function dev_handle_error(err, req, res) { //, next) {
    res.status(err.status || 500);
    res.json({
        'error': {
            message: err.message,
            error: err
        }
    });
}

function prod_handle_error(err, req, res) { //, next) {
    res.status(err.status || 500);
    res.json({
        'error': {
            message: err.message,
            error: err
        }
    });
}

module.exports = {
    dev_handle_error: dev_handle_error,
    prod_handle_error: prod_handle_error
};
