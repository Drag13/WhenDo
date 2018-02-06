const chai = require('chai'),
    spies = require('chai-spies'),
    expect = chai.expect;

const whendo = require('../src/index');

chai.use(spies);

describe('whenDo function', () => {

    it('should be defined', () => {
        expect(whendo).to.be.an('function');
    });

    it('should return function', () => {
        expect(whendo()).to.be.an('function');
    });
});

describe('if predicate', () => {
    const spy = chai.spy;
    let trueAction, falseAction;

    beforeEach(() => {
        trueAction = spy(() => { });
        falseAction = spy(() => { });
    });

    describe('is true', () => {

        describe('and trueAction', () => {
            it('is function, true action should be called', () => {
                const ifthen = whendo(true, trueAction, falseAction)();
                expect(trueAction).to.have.been.called();
            });

            it('is function, true action should be called with passed param', () => {
                const ifthen = whendo(true, trueAction, falseAction)('test');
                expect(trueAction).to.have.been.called.with('test');
            });

            it('is not a function, nothing should fail', () => {
                const ifthen = whendo(true, null, falseAction);
                expect(ifthen()).expect.to.throw(new Error(`const trueActionIsNotAFunctionError = ${typeof undefined}`));
            });
        });
    });

    describe('is false', () => {
        describe('and falseAction', () => {
            it('is function, it should be called', () => {
                const ifthen = whendo(false, trueAction, falseAction)();
                expect(falseAction).to.have.been.called();
            });

            it('is function, it should be called with selected param', () => {
                const ifthen = whendo(false, trueAction, falseAction)('test');
                expect(falseAction).to.have.been.called.with('test');
            });

            it('is not a function, nothing should fail', () => {
                const ifthen = whendo(false, trueAction, null)();
                expect(true).to.be.true;
            });
        });
    });

    describe('is function that returns true', () => {
        const fpredicate = () => true;
        describe('and trueAction', () => {
            it('is function, true action should be called', () => {
                const ifthen = whendo(fpredicate, trueAction, falseAction)();
                expect(trueAction).to.have.been.called();
            });

            it('is function, true action should be called with passed param', () => {
                const ifthen = whendo(fpredicate, trueAction, falseAction)('test');
                expect(trueAction).to.have.been.called.with('test');
            });

            it('is not a function, nothing should fail', () => {
                const ifthen = whendo(fpredicate, null, falseAction)();
                expect(true).to.be.true;
            });
        });
    });

    describe('is function that reurns false', () => {
        const fpredicate = () => false;
        describe('and falseAction', () => {
            it('is function, it should be called', () => {
                const ifthen = whendo(fpredicate, trueAction, falseAction)();
                expect(falseAction).to.have.been.called();
            });

            it('is function, it should be called with selected param', () => {
                const ifthen = whendo(fpredicate, trueAction, falseAction)('test');
                expect(falseAction).to.have.been.called.with('test');
            });

            it('is not a function, nothing should fail', () => {
                const ifthen = whendo(fpredicate, trueAction, null)();
                expect(true).to.be.true;
            });
        });
    });
});