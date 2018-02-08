const chai = require('chai'),
    wd = require('../src/index'),
    spies = require('chai-spies'),
    expect = chai.expect;

chai.use(spies);

describe('if predicate', () => {
    let trueAction, falseAction;

    beforeEach(() => {
        trueAction = chai.spy(() => true);
        falseAction = chai.spy(() => false);
    });

    describe('is true', () => {
        const predicate = true,
            param = 'test';

        it('and true handler is function, true branch should be executed with passed params', () => {
            wd(predicate, trueAction, falseAction)(param);

            expect(trueAction).to.have.been.called.with(param);
            expect(falseAction).to.not.have.been.called();
        });

        it('and true handler is not a function, result should be null', () => {
            const result = wd(predicate, null, falseAction)(param);

            expect(falseAction).to.not.have.been.called();
            expect(result).equals(null);
        });
    });

    describe('is function that returns true', () => {
        const predicate = () => true,
            param = 'test';

        it('and true handler is function, true branch should be executed with passed params', () => {
            wd(predicate, trueAction, falseAction)(param);

            expect(trueAction).to.have.been.called.with(param);
            expect(falseAction).to.not.have.been.called();
        });

        it('and true handler is not a function, result should be null', () => {
            const result = wd(predicate, null, falseAction)(param);

            expect(falseAction).to.not.have.been.called();
            expect(result).equals(null);
        });
    });
});