/**
 * @module WhenDo
 */

'use strict';

/**
 * compose predicate and if else functions to the new function
 * @param {boolean} predicate 
 * @param {function} trueAction 
 * @param {function} elseAction 
 */
function whenDo(predicate, trueAction, elseAction) {

    return function ifThenElse() {
        if (!!predicate) {
            return isFunction(trueAction) ? trueAction.apply(null, [...arguments]) : null;
        }

        return isFunction(elseAction) ? elseAction.apply(null, [...arguments]) : null;
    }
}

/**
 * 
 * @param {*} func
 * @returns {boolean} 
 */
function isFunction(func) {
    return typeof func === 'function';
}

module.exports = whenDo;