pulsed
======

Run a function `n` amount of times with a given interval pattern

## install

*npm*

```sh
$ npm install pulsed --save
```

*component*

```sh
$ component install jwerle/pulsed --save
```


## usage

```js
var pulsed = require('pulsed')

var fn = pulsed([250, 500], Infinity, function () {
  console.log('beep', Date.now());
});
```

This will run a function forever with a timeout pattern of `250ms` and `500ms`.

## api

```js
function pulsed (/* Array */pattern, /* Number */ count, /* Function */ fn)
```

## license

MIT
