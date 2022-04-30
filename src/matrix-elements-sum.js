const { NotImplementedError } = require('../extensions/index.js');

/**
 * Givenmatr, a rectangularmatr of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>}matr
 * @return {Number}
 *
 * @example
 *matr = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matr ) {
  function isZero(matr, i, j) {
    if (i < 0) return false
    return matr[i][j] == 0;
  }
  let ans = 0;
  for (let i = 0; i <matr.length; i++) 
  for (let j = 0; j <matr[i].length; j++) {
    if (!isZero(matr, i - 1, j)) {ans +=matr[i][j] }
  }
  return ans;
}
  // remove line with error and write your code here


module.exports = {
  getMatrixElementsSum
};
