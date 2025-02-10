const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let obj = {};
  for (let s of s1) {
    obj[s] = ++obj[s] || 1;
  }
  let count = 0;
  for (let o of s2) {
    if (o in obj && obj[o]) {
      count++;
      --obj[o];
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};
