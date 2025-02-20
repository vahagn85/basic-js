const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let colLength = matrix[0].length;
  let rowLength = matrix.length;
  const result = Array.from({ length: rowLength }, () =>
    Array(colLength).fill(0)
  );
  let hasMins = false;
  for (let i = 0; i < colLength; i++) {
    for (let j = 0; j < rowLength; j++) {
      if (matrix[j][i]) {
        hasMins = true;
        if (i == 0 && !matrix[j][i + 1]) {
          result[j][i + 1] = ++result[j][i + 1] || 1;
        } else {
          result[j][i] = 1;
        }
        if (i > 0 && i < colLength && !matrix[j][i + 1]) {
          result[j][i + 1] = ++result[j][i + 1] || 1;
        } else {
          result[j][i] = 1;
        }
        if (i > 0 && i !== colLength - 1 && !matrix[j][i - 1]) {
          result[j][i - 1] = ++result[j][i - 1] || 1;
        } else {
          result[j][i] = 1;
        }

        if (j == 0 && !matrix[j + 1][i]) {
          result[j + 1][i] = ++result[j + 1][i] || 1;
        } else {
          result[j][i] = 1;
        }
        if (j > 0 && j < rowLength - 1 && !matrix[j + 1][i]) {
          result[j + 1][i] = ++result[j + 1][i] || 1;
        } else {
          result[j][i] = 1;
        }
        if (j > 0 && j !== rowLength - 1 && !matrix[j - 1][i]) {
          result[j - 1][i] = ++result[j - 1][i] || 1;
        } else {
          result[j][i] = 1;
        }
      } else {
        result[j][i] = +!!hasMins;
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper,
};
