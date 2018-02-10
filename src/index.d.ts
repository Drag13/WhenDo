export default whenDo;

interface whenDo<TResult> {
    (predicate: (() => Boolean) | Boolean, trueAction?: handler<TResult>, elseAction?: handler<TResult>): handler<TResult>
}

interface handler<TResult> {
    (...args: any[]): TResult
}