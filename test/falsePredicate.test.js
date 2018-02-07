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

    describe('is false', () => {
        const predicate = false,
            param = 'test';

        it('and false handler is function, false branch should be executed with passed params', () => {
            wd(predicate, trueAction, falseAction)(param);

            expect(trueAction).to.not.have.been.called()
            expect(falseAction).to.have.been.called.with(param);
        });

        it('and false handler is not a function, result should be null', () => {
            const result = wd(predicate, trueAction, null)(param);

            expect(trueAction).to.not.have.been.called();
            expect(result).equals(null);
        });
    });

    describe('is function that returns false', () => {
        const predicate = () => false,
            param = 'test';

        it('and false handler is function, false branch should be executed with passed params', () => {
            wd(predicate, trueAction, falseAction)(param);

            expect(trueAction).to.not.have.been.called()
            expect(falseAction).to.have.been.called.with(param);
        });

        it('and false handler is not a function, result should be null', () => {
            const result = wd(predicate, trueAction, null)(param);

            expect(trueAction).to.not.have.been.called();
            expect(result).equals(null);
        });
    });
});