/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Array} arr
 * @returns {Array}
 */
function getMaximalSequence(arr) {
  let maxSeq = [];
  let currentSeq = [];

  for (let i = 0; i < arr.length; i++) {
    if (currentSeq.length === 0 || arr[i] === currentSeq[0]) {
      currentSeq.push(arr[i]);
    } else {
      if (currentSeq.length > maxSeq.length) {
        maxSeq = currentSeq;
      }
      currentSeq = [arr[i]];
    }
  }

  if (currentSeq.length > maxSeq.length) {
    maxSeq = currentSeq;
  }

  return maxSeq;
}

module.exports = getMaximalSequence;
