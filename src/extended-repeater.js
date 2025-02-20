const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = "+",
    addition,
    additionRepeatTimes,
    additionSeparator = "|",
  } = options;

  let newStr = "";
  for (let i = 0; i < repeatTimes; i++) {
    newStr += str;
    if (addition !== undefined) {
      newStr += addition;
      for (let j = 1; j < additionRepeatTimes; j++) {
        if (additionSeparator) {
          newStr += additionSeparator;
        }
        newStr += addition;
      }
    }
    if (separator && repeatTimes - 1 !== i) {
      newStr += separator;
    }
  }

  return newStr;
}

module.exports = {
  repeater,
};
