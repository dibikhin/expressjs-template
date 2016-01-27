function setup(app, handlers) {
    app.get('/', handlers.sample.get);
    app.post('/', handlers.sample.post);
}

module.exports = {
    setup: setup
};
