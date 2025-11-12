/**
 * Write a function which finds a maximal common substring of two given strings
 * @param {string} str1
 * @param {string} str2
 * @returns {string}
 */
function maxCommonSub(str1, str2) {
  let max = '';

  for (let i = 0; i < str1.length; i++) {
    for (let j = i + 1; j <= str1.length; j++) {
      const sub = str1.slice(i, j);
      if (str2.includes(sub) && sub.length > max.length) {
        max = sub;
      }
    }
  }

  return max;
}

module.exports = maxCommonSub;
