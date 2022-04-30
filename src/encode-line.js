const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  if (str.length == 0) return '';
let parts = []
let segmentLen = 1
let segmentChar = str[0]

for (let i = 1; i < str.length; i++) {

  let char = str[i]

  if (char != segmentChar) {

      parts.push([segmentLen, segmentChar])
      segmentLen  = 1
      segmentChar = char
  } else {
      segmentLen++
  }
}
parts.push([segmentLen, segmentChar])
console.log(parts + 'asdasdasd')
return parts.map(([count, c]) => (count > 1 ? count : '') + c).join('')
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
