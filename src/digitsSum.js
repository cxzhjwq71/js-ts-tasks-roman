/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  return [...String(Math.abs(n))].map(Number).reduce((a, b) => a + b, 0);
};
function digitsSum(num) {
  const digits = String(num).split('');
  let sum = 0;
  for (let digit of digits) {
    sum += Number(digit);
  }
  return sum;
}
console.log(digitsSum(123));
