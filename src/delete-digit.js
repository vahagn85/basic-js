const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = String(n);
  let max = "";
  let find = false;
  let minNum = Math.min(...str);
  for (let i = 0; i < str.length; i++) {
    if (i === 0 && str[i + 1] && str[i] < str[i + 1]) {
      find = true;
      continue;
    }

    if (!find && str[i] == minNum) {
      find = true;
      continue;
    }
    max += str[i];
  }
  return +max;
}

module.exports = {
  deleteDigit,
};
