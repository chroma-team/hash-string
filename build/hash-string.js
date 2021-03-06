(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.hash = factory();
  }
}(this, function() {
/**
    A string hashing function based on Daniel J. Bernstein's popular 'times 33' hash algorithm.
    @param {string} text - String to hash
    @return {number} Resulting number.
*/
function hash(text) {
    'use strict';

    var hash = 5381,
        index = text.length;

    while (index) {
        hash = (hash * 33) ^ text.charCodeAt(--index);
    }

    return hash >>> 0;
}
return hash;
}));
