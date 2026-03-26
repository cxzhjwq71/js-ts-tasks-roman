/**
 * Compares two numbers
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @returns {string}
 */
module.exports.compareTwoNumbers = function compareTwoNumbers(firstNumber, secondNumber) {
  throw new Error('Not implemented');
};
function compareTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log('compareTwoNumbers:', compareTwoNumbers(5, 8));
