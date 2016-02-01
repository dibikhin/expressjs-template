var request = require('supertest');

var app = require('../app');

describe('App', function () {
    describe('GET /', function () {
        it('respond with 200', function (done) {
            request(app)
                .get('/')
                .expect(200, done);
        });
    });
});
