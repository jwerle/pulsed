
/**
 * Module dependencies
 */

var pulsed = require('./')
  , assert = require('assert')

var opts = {i:0};
var n;
var limit = Math.pow(5, 20);
var start = Date.now();
var last = null;

var fn = pulsed([250, 500, 250, 500], 5, function (o) {
  assert(opts.i === o.i);
  opts.i++;
  n = Math.pow(5, opts.i);
  if (null === last) {
    last = Date.now();
  }
  var diff = last - start;
  console.log('beep', opts.i, n, last, diff);
  last = Date.now();
  if (20 === opts.i) {
    assert(n === limit);
  }
});

fn(opts);
