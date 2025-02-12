const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  let newArr = [...arr];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--double-next":
        newArr[i] = newArr[i + 1];
        break;
      case "--discard-next":
        newArr[i] = null;
        newArr[i + 1] = null;
        break;
      case "--double-prev":
        newArr[i] = newArr[i - 1];
        break;
      case "--discard-prev":
        newArr[i] = null;
        newArr[i - 1] = null;
        break;
    }
  }
  return newArr.filter(Boolean);
}

module.exports = {
  transform,
};
