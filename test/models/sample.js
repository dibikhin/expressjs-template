var should = require('should');
var sinon = require('sinon');
var _ = require('underscore');

// TODO better path access https://gist.github.com/branneman/8048520
var sample_module = require('../../domain/sample');

describe('Sample module', function () {
    describe('do_work()', function () {
        var test_data = {
            from: 'John',
            to: 'Mary'
        };

        // Common validation
        it('should exist', function () {
            sample_module.do_work.should.be.ok();
        });

        it('should be a Function', function () {
            sample_module.do_work.should.be.a.Function();
        });

        // Contract validation
        it('should return a String', function () {
            var spy_callback = sinon.spy();
            sample_module.do_work(test_data, spy_callback);
            spy_callback.args[0][1].should.be.a.String();
        });
        
        // Callback safety
        it('should call the callback once', function () {
            var spy_callback = sinon.spy();
            sample_module.do_work(test_data, spy_callback);
            spy_callback.calledOnce.should.be.true();
        });

        // Params validation
        context('When params is invalid', function () {
            it('should return an error', function () {
                var spy_callback = sinon.spy();
                sample_module.do_work(null, spy_callback);
                spy_callback.args[0][0].should.be.equal('some error');
            });
        });
        
        // Business logic
        context('When params is OK', function () {
            it('should return from + to', function () {
                var spy_callback = sinon.spy();
                sample_module.do_work(test_data, spy_callback);
                spy_callback.args[0][1].should.be.equal('John to Mary');
            });
        });
    });
});
