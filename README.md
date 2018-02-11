# WhenDo

[![Build Status](https://travis-ci.org/Drag13/WhenDo.svg?branch=master)](https://travis-ci.org/Drag13/WhenDo)
[![Coverage Status](https://coveralls.io/repos/github/Drag13/WhenDo/badge.svg?branch=coverage)](https://coveralls.io/github/Drag13/WhenDo?branch=coverage)
[![npm](https://img.shields.io/npm/dt/@drag13/when-do.svg)](https://github.com/Drag13/WhenDo)
[![GitHub license](https://img.shields.io/github/license/Drag13/WhenDo.svg)](https://github.com/Drag13/WhenDo/blob/master/LICENSE)
[![TypeSCript](https://img.shields.io/badge/TypeScript-Ready-brightgreen.svg)](https://github.com/Drag13/WhenDo)

## Description

Small function that can be used instead if-then statement in functional style programming with JavaScript.
Takes predicate and one or two handlers. Returns new function that will check predicate and execute true/false handler.

No external dependencies, uses ES6 inside, TypeSCript ready.

## Installation

  `npm install @drag13/when-do`

## Usage

Usage is simple:
WhenDo function returns new function that will be executed depending on predicate.
You can pass params and expect result returning.


``` javascript
const wd = require('@drag13/when-do');
const myComposedFunction = wd(() => true, (name) => `hello ${name}`);
console.assert(myComposedFunction('mate') === 'hello mate');
```

If you pass predicate as function, it will not be invoked untill composed function call. 

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

Feel free to use TypeSCript

``` typescript
import * as whenDo from '@drag13/when-do';
const myComposedFunction = wd(() => true, (name) => `hello ${name}`);
console.assert(myComposedFunction('mate') === 'hello mate');
```

## Tests

  `npm test`

## Future plans

* 0.2 Add supporting function as predicate (done)
* 0.3 Optimization (done)
* 0.4 index.d.ts (done)
* 0.5 a bit more documentation

* ...

* 1.0.0 Release.

## Contributing

Any bug fixing appreciated.
If you want to add new functionality - welcome. But KISS it please.
