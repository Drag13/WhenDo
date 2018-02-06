/**
 * @module WhenDo
 */

'use strict';

const trueActionIsNotAFunctionError = 'Expected function but got ';

/**
 * compose predicate and if else functions to the new function
 * @param {(function|boolean)} predicate - function or anything else that can be treated as bool.
 * @param {function} trueAction  - function called if predicate returns true
 * @param {function} [elseAction] - function called if predicate returns false 
 * @returns {*}
 */
function whenDo(predicate, trueAction, elseAction) {
    if (!isFunction(trueAction)) {
        throw new Error(`trueAction expected as function but got ${typeof predicate}`);
    }

    return function ifThenElse() {
        const predicateResult = isFunction(predicate) ? predicate() : !!predicate

        if (predicateResult) {
            return trueAction.apply(null, [...arguments]);
        }

        return isFunction(elseAction) ? elseAction.apply(null, [...arguments]) : null;
    }
}

/**
 * @param {*} func
 * @returns {boolean} 
 */
function isFunction(func) {
    return typeof func === 'function';
}

module.exports = whenDo;
