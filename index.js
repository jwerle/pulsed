
/**
 * Module dependencies
 */

var isArray = Array.isArray


/**
 * Export `pulsed`
 */

module.exports = pulsed;


/**
 * Returns a function that is executed
 * in interval patterns `n` number of times
 *
 * @api public
 * @param {Array} pattern
 * @param {Number} count
 * @param {Function} fn
 */

function pulsed (pattern, count, fn) {
  var to, i = 0, n = 0;

  if ('function' === typeof count) {
    fn = count;
    count = 1;
  }

  count = pattern.length * count;

  if (!isArray(pattern)) {
    throw new TypeError("expecting an array");
  }

  return function f () {
    var args = arguments;
    var interval = pattern[i++]

    if (undefined === interval) {
      interval = pattern[(i = 0)];
    }

    ~function run () {
      to = setTimeout(function () {
        if (n >= count) return;
        fn.apply(null, arguments);
        run();
        n++;
      }, interval);
    }();
  }
}
