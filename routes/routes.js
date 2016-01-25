function setup(app, handlers) {
    app.get('/', handlers.index);
}

module.exports = {
    setup: setup
};
