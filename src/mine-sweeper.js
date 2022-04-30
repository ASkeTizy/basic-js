const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matr
 * @return {Array<Array>}
 *
 * @example
 * matr = [
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
function minesweeper(matr ) {
  function isMine(matr, i, j) {
    if (i < 0 || j < 0 || i >= matr.length || j >= matr[i].length) return 0
    return +matr[i][j]
  }
  const field = []
  for (let i = 0; i < matr.length; i++) {
    field.push([])
    for (let j = 0; j < matr[i].length; j++) {
      field[i].push(
        isMine(matr, i - 1, j) +
        isMine(matr, i + 1, j) +
        isMine(matr, i, j - 1) +
        isMine(matr, i, j + 1) +
        isMine(matr, i - 1, j - 1) +
        isMine(matr, i + 1, j - 1) +
        isMine(matr, i - 1, j + 1) +
        isMine(matr, i + 1, j + 1)
      )
    }
  }

  return field
  // remove line with error and write your code here
}

module.exports = {
  minesweeper
};
