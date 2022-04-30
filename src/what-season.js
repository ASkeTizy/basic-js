const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */const { inspect } = require('util')
function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!'
}

if (!(date instanceof Date)) {
    throw Error('Invalid date!')
}
try {
  +date // Its just works
} catch {
    throw Error('Invalid date!')
}

const month = date.getMonth()

let ans

if (month < 2) {
    ans = 'winter'
} else if (month < 5) {
    ans = 'spring'
} else if (month < 8) {
    ans = 'summer'
} else if (month < 11){
    ans = 'fall'
} else {
    ans = 'winter'
}
return ans;
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
