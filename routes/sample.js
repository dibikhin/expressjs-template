var Cat = require('models/cat');

function get(req, res, next) {
    var query = { '_id': '56a906f146da72802e1be5cd' };
    Cat.findOne(query, 'name', function (err, kitty) {
        if (err) return next(err);
        res.json(kitty);
    });
}

function post(req, res) { //, next) {
    var kitty = new Cat({
        name: 'Qwerty'
    });
    kitty.save(function (err) {
        if (err) {
            console.log(err);
            return res.json({ ok: 'not ok' });
        }
        res.json(kitty);
        console.log('meow from post!');
    });
}

// TODO move to the beginning
module.exports = {
    get: get,
    post: post
};
