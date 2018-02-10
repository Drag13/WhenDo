# WhenDo

[![Build Status](https://travis-ci.org/Drag13/WhenDo.svg?branch=dev)](https://travis-ci.org/Drag13/WhenDo)
[![Coverage Status](https://coveralls.io/repos/github/Drag13/WhenDo/badge.svg?branch=coverage)](https://coveralls.io/github/Drag13/WhenDo?branch=coverage)
[![npm](https://img.shields.io/npm/dt/WhenDo.svg)](https://github.com/Drag13/WhenDo)
[![GitHub license](https://img.shields.io/github/license/Drag13/WhenDo.svg?style=plastic)](https://github.com/Drag13/WhenDo/blob/master/LICENSE)

## Description

Small function that can be used instead if-then statement in functional style programming with JavaScript.
Takes predicate and one or two handlers. Returns new function that will check predicate and execute true/false handler.

No external dependencies, uses ES6 inside.

## Installation

  `npm install @drag13/when-do`

## Usage

``` javascript
const wd = require('@drag13/when-do');
const myComposedFunction = wd(() => true, () => console.log('i am true'));
myComposedFunction();
```

Output should be:

  `i am true`

Also you can pass a parameters that will be send to the handler

``` javascript
const wd = require('@drag13/when-do');
const myComposedFunction = wd(() => true, (name) => console.log(`hello ${name}`));
myComposedFunction('mate');
```

Output should be:

  `hello mate`

If your function returns anything, this will be also returned. If you don't provide function to executed branch - null will be returned.

``` javascript
const wd = require('@drag13/when-do');
const myComposedFunction = wd(() => true, (name) => `hello ${name}`);
console.assert(myComposedFunction('mate') === 'hello mate');
```

## Tests

  `npm test`

## Future plans

* 0.2 Add supporting function as predicate (done)
* 0.3 Optimization (done)
* 0.4 index.d.ts

* ...

* 1.0.0 Release.

## Contributing

Any bug fixing appreciated.
If you want to add new functionality - welcome. But KISS it please.
