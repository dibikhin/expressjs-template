var db = require('../db/mongodb');

var Cat = db.model('Cat', {
    name: {
        type: String,
        required: true
    }
});

module.exports = Cat;
