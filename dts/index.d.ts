// Type definitions for WhenDo
// Project: https://github.com/Drag13/WhenDo
// Definitions by: Drag13 https://github.com/Drag13

/* =================== USAGE ===================

     import * as whenDo from '@drag13/when-do';

 =============================================== */

/**
* Compose new function from predicate, trueAction and elseAction. 
*/
declare function wd<TResult>(predicate: (() => Boolean) | Boolean, trueAction?: wd.handler<TResult>, elseAction?: wd.handler<TResult>): wd.handler<TResult>;

declare namespace wd {
    interface handler<TResult> {
        (...args: any[]): TResult
    }
}

export = wd;
