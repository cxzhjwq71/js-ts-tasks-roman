/**
 * Write a function which from the given array creates a new array
 * where each array item defines the sum of elements from 0 index up to i-th index (included)
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
function partialSum(arr) {
  const result = [0]; // ← начальное значение
  let sum = 0;

  for (let num of arr) {
    sum += num;
    result.push(sum);
  }

  return result;
}

module.exports = partialSum;
