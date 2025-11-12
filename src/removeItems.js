/**
 * Write a function which removes from given array items equal to a given value
 * @param {Array} arr
 * @param {*} value
 * @returns {Array}
 */
function removeItems(arr, value) {
  return arr.filter(item => item !== value);
}

module.exports = removeItems;
