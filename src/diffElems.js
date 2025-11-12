/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Array<number>} arr
 * @returns {number}
 */
function diffElems(arr) {
  return new Set(arr).size;
}

module.exports = diffElems;
