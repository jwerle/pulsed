
/**
 * Module dependencies
 */

var pulsed = require('./')
  , assert = require('assert')

var i = 0;
var n;
var limit = Math.pow(5, 20);
var start = Date.now();
var last = null;

var fn = pulsed([250, 500, 250, 500], 5, function () {
  console.log(arguments)
  i++;
  n = Math.pow(5, i);
  if (null === last) {
    last = Date.now();
  }
  var diff = last - start;
  console.log('beep', i, n, last, diff);
  last = Date.now();
  if (20 === i) {
    assert(n === limit);
  }
});

fn({foo: "bar"});
