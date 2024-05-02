# rounder [![Build Status](https://travis-ci.org/natecavanaugh/rounder.svg?branch=master)](https://travis-ci.org/natecavanaugh/rounder)

> Round a number to a specific number of decimal places.


## Install

```
$ npm install --save rounder
```


## Usage

```js
var rounder = require('rounder');

rounder(1.5254325, 2);
//=> 1.53

rounder(1.5254325, 3);
//=> 1.525
```


## API

### rounder(value, precision)

#### value

*Required*
Type: `number`

The number to round.

##### precision

Type: `number`

The number of digits after the decimal point to round to.

## License

MIT © [Nate Cavanaugh](http://alterform.com)