# WhenDo

  Small function that can be used instead if-then statement in functional style programming with JavaScript
  Takes predicate and one or two handlers. Returns new function that will check predicate and execute true/false handler.

[![Build Status](https://travis-ci.org/Drag13/WhenDo.svg?branch=dev)](https://travis-ci.org/Drag13/WhenDo)
[![Coverage Status](https://coveralls.io/repos/github/Drag13/WhenDo/badge.svg?branch=coverage)](https://coveralls.io/github/Drag13/WhenDo?branch=coverage)

## Installation

  `npm install @drag13/when-do`

## Usage

``` javascript
const wd = require('@drag13/when-do');
const myComposedFunction = wd(5===5, ()=> console.log('i am true'));
myComposedFunction();
```

Output should be `i am true`

Also you can pass a parameters that will be send to the handler.

``` javascript
const wd = require('@drag13/when-do');
const myComposedFunction = wd(5===5, (name)=> console.log(`hello {name}`));
myComposedFunction('mate');
```

Output should be `hello mate`

## Tests

  `npm test`

## Future plans

0.2 Add supporting function as predicate.
0.2.1 More tests
0.2.2 Better JSDoc
0.2.3 More badges

...

1.0.0 Release.

## Contributing

Any bug fixing appreciated.
If you want to add new functionality - welcome. But keep this as tiny as possible.
