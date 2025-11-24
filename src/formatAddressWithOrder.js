/**
 * Write a function which returns a formatter function to format address based on input address data
 * Array 'order' is specifying the format by string index in array.
 * In result address string all entities should be divided with ', ' except the last one (no ', ' at the end)
 * Example:
 * order = ['city', 'street', 'house', 'apartment', 'postalCode', 'country']
 * gives address string like: 'city, street, house, apartment, postalCode, country'
 * @param {Array} order
 * @returns {function}
 */
module.exports.formatAddressWithOrder = function formatAddressWithOrder(order) {
  throw new Error('Not implemented'); // remove me and write a solution
};
module.exports.formatAddressWithOrder = function formatAddressWithOrder(address, order) {
  let result = [];
  for (let key of order) {
    result.push(address[key]);
  }
  return result.join(', ');
};

// тест
const address = { street: 'Main St 12', city: 'Brussels', zip: '1000', country: 'Belgium' };
console.log(module.exports.formatAddressWithOrder(address, ['country', 'zip', 'city', 'street']));
