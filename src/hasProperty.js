/**
 * Check if an object contains a property
 * @param {Object} object
 * @param {string} prop
 * @returns {boolean}
 */
function hasProperty(object, prop) {
  return Object.prototype.hasOwnProperty.call(object, prop);
}

module.exports = hasProperty;
