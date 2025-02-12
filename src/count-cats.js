const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  if (!matrix.length) return 0;
  let sum = 0;
  let colLength = matrix[0].length;
  let rowLength = matrix.length;

  for (let i = 0; i < colLength; i++) {
    for (let j = 0; j < rowLength; j++) {
      if (matrix[j][i] == "^^") {
        sum++;
      }
    }
  }
  return sum;
}

module.exports = {
  countCats,
};
