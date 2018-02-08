const chai = require('chai'),
    whendo = require('../src/index'),
    expect = chai.expect;

describe('whenDo function', () => {
    it('should throw exception if both trueAction and elseAction are not a functions', () => {
        const trueAction = {}, falseAction = [];
        expect(whendo.bind(null, true, trueAction, falseAction)).to.
            throw(`Expected trueAction or elseAction as function but found ${typeof trueAction}, ${typeof falseAction}`);
    });
});