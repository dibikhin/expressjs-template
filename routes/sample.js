var Cat = require('../models/cat');

function get(req, res, next) {
    var kitty = new Cat({
        name: 'Qwerty'
    });
    kitty.save(function (err) {
        if (err) {
            console.log(err);
            res.json({ ok: 'not ok' });
        }
        res.json(kitty);
        console.log('meow from get!');
    });
}

function post(req, res, next) {
    var kitty = new Cat({
        name: 'Qwerty'
    });
    kitty.save(function (err) {
        if (err) {
            console.log(err);
            res.json({ ok: 'not ok' });
        }
        res.json(kitty);
        console.log('meow from post!');
    });
}

module.exports = {
    get: get,
    post: post
};