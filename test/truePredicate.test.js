const chai = require('chai'),
    wd = require('../src/index'),
    spies = require('chai-spies'),
    expect = chai.expect;

chai.use(spies);

describe('if predicate', () => {
    const trueActionResult = 'trueActionResulu',
        falseActionResult = 'falseActionResult';
        
    let trueAction, falseAction;

    beforeEach(() => {
        trueAction = chai.spy(() => trueActionResult);
        falseAction = chai.spy(() => falseActionResult);
    });

    describe('is true', () => {
        const predicate = true,
            param = 'test';

        it('and true handler is function, true branch should be executed with passed params', () => {
            const result = wd(predicate, trueAction, falseAction)(param);

            expect(trueAction).to.have.been.called.with(param);
            expect(result).equals(trueActionResult);
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
            const result = wd(predicate, trueAction, falseAction)(param);

            expect(trueAction).to.have.been.called.with(param);
            expect(result).equals(trueActionResult);
            expect(falseAction).to.not.have.been.called();
        });

        it('and true handler is not a function, result should be null', () => {
            const result = wd(predicate, null, falseAction)(param);

            expect(falseAction).to.not.have.been.called();
            expect(result).equals(null);
        });
    });
});