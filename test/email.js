var should = require('should');

var emails_module = require('../email');

describe('Email', function () {
    describe('Send', function () {
        it('should return from + to', function () {
            var result = emails_module.send({ from: 'Alex', to: 'Miron' });
            result.should.be.equal('Alex to Miron');
        });

        it('should return String', function () {
            var result = emails_module.send({ from: 'Alex', to: 'Miron' });
            result.should.be.a.String;
        });
    });
});
