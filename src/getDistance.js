/**
 * Calculate the distance between two points represented on the standard Planar coordinate system
 * with precision 2 decimal places
 * Each Point represented by object contains two property (X and Y)
 * @param {Object} firstPoint
 * @param {Object} secondPoint
 * @returns {number}
 */
function getDistance(firstPoint, secondPoint) {
  const dx = secondPoint.x - firstPoint.x;
  const dy = secondPoint.y - firstPoint.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return Number(distance.toFixed(2));
}

module.exports = getDistance;
