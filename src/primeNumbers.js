/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  throw new Error('Not implemented'); // remove me and write a solution
};
module.exports.primeNumbers = function primeNumbers(n) {
  let result = [];
  for (let i = 2; i <= n; i++) {
    let prime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        prime = false;
        break;
      }
    }
    if (prime) result.push(i);
  }
  return result;
};

// тест
console.log(module.exports.primeNumbers(20));
