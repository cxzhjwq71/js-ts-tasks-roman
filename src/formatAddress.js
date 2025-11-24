/**
 * Write a function which returns a formatter function to format address based on input address data
 * Format should be the following: 'street, house, apartment, city, postal-code, country'
 * @returns {function}
 */
module.exports.formatAddress = function formatAddress() {
  throw new Error('Not implemented'); // remove me and write a solution
};
module.exports.formatAddress = function formatAddress(address) {
  return address.street + ', ' + address.city + ', ' + address.zip + ', ' + address.country;
};

// тест
console.log(
  module.exports.formatAddress({
    street: 'Main St 12',
    city: 'Brussels',
    zip: '1000',
    country: 'Belgium',
  })
);
