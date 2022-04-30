const { NotImplementedError } = require('../extensions/index.js');

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
function deleteDigit( n ) {
  const src = n.toString();

  let ans = null;

  for (i in src) {
    const modified = src.slice(0, i) 
                    + src.slice(+i + 1)
    if (ans == null || ans < Number.parseInt(modified)) ans = +modified;
    
  }
  return ans;
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
