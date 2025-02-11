const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  if (n.length !== 17) {
    return false;
  }
  let arr = n.split("-");
  if (arr.length !== 6) {
    return false;
  }
  for (let k of arr) {
    if (k.length !== 2) {
      return false;
    }
    // A-F 65-70
    // 0-9 48-57
    const str1 = k[0].codePointAt();
    const str2 = k[1].codePointAt();
    if (
      !((str1 >= 48 && str1 <= 57) || (str1 >= 65 && str1 <= 70)) ||
      !((str2 >= 48 && str2 <= 57) || (str2 >= 65 && str2 <= 70))
    ) {
      return false;
    }
  }
  return true;
}
module.exports = {
  isMAC48Address,
};
