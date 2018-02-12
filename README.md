# WhenDo

[![Coverage Status](https://coveralls.io/repos/github/Drag13/WhenDo/badge.svg?branch=coverage)](https://coveralls.io/github/Drag13/WhenDo?branch=coverage)
[![Build Status](https://travis-ci.org/Drag13/WhenDo.svg?branch=master)](https://travis-ci.org/Drag13/WhenDo)
[![npm](https://img.shields.io/npm/dt/@drag13/when-do.svg)](https://github.com/Drag13/WhenDo)
[![TypeSCript](https://img.shields.io/badge/TypeScript-Ready-brightgreen.svg)](https://github.com/Drag13/WhenDo)
[![GitHub license](https://img.shields.io/github/license/Drag13/WhenDo.svg)](https://github.com/Drag13/WhenDo/blob/master/LICENSE)

## Description

Small function that can be used instead of 'if-then' statement in functional style programming with JavaScript. Takes a predicate and one or two handlers. Returns new function that will check the predicate and execute a true/false handler.

No external dependencies, uses ES6 inside, TypeScript ready.

## Installation

  `npm install @drag13/when-do`

## Usage

Usage is simple: WhenDo function returns a new function that will be executed depending on a predicate. You can pass params and expect return result.

``` javascript
const wd = require('@drag13/when-do');
const myComposedFunction = wd(() => true, (name) => `hello ${name}`);
console.assert(myComposedFunction('mate') === 'hello mate');
```

If you pass a predicate as a function, it will not be invoked until composed function call is executed.

``` javascript
const wd = require('@drag13/when-do');
const log = console.log;
const demo = wd(()=> { log('predicate calculated');  return true;},
                ()=> log('trueFunction executed'));
log('start');
demo();
```

Result will be

  `start`

  `predicate calculated`

  `trueFunction executed`

## TypeScript

Feel free to use it with TypeScript

``` typescript
import * as whenDo from '@drag13/when-do';
const myComposedFunction = wd(() => true, (name) => `hello ${name}`);
console.assert(myComposedFunction('mate') === 'hello mate');
```

## Tests

  `npm test`

## Future plans

* 1.0 Release
* 1.1 ...

## Contributing

Any bug fixing is appreciated. If you want to add new functionality - you're welcome. But KISS it please.
