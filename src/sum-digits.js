const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(src) {
  const sum = src => {
    let ans = 0

    while (src > 0) {
      ans += src % 10
      src = Math.trunc(src / 10)
    }

    return ans
    
  }

  while (src > 9) {
    src = sum(src)
  }

  return src
  // remove line with error and write your code here
}

module.exports = {
  getSumOfDigits
};
