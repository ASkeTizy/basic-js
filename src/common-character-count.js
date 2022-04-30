const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  let ans = 0

  const str1 = {}, str2 = {};
  const fillstr = (src, str) => [...str].forEach(c => c in src ? src[c]++ : src[c] = 1);

  fillstr(str1, s1);
  
  fillstr(str2, s2);

  Object.entries(str1).forEach(([c, count]) => {
    if (!(c in str2)) {  str2[c] = 0}
    ans += Math.min(str1[c], str2[c])
  })

  return ans
}

module.exports = {
  getCommonCharacterCount
};
