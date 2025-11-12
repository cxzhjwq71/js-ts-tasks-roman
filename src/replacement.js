/**
 * Write a function which for every number (negative/positive/zero) in given array replaces:
 *  one-digit numbers with 1
 *  two-digit numbers with 2
 *  three-digit numbers with 3
 *  the rest with 4
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
function replacement(arr) {
  return arr.map(num => {
    const digits = Math.abs(num).toString().length;
    if (digits === 1) return 1;
    if (digits === 2) return 2;
    if (digits === 3) return 3;
    return 4;
  });
}

module.exports = replacement;
