const chai = require('chai'),
    whendo = require('../src/index'),
    expect = chai.expect;

describe('whenDo function', () => {
    it('should be function', () => {
        expect(whendo).to.be.an('function');
    });
});