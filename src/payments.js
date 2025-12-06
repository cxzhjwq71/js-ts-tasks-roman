/**
 * Write a function that returns a function
 * calculating how much money will a person have after all income/debts calculation
 *
 * income is an Object that may look like:
 * {
 *   salary: 100,
 *   investment: 200,
 * }
 *
 * debts is an Object that may look like:
 * {
 *   rent: 50,
 *   food: 25,
 * }
 *
 * At the end after calculation all person's money we will have: 100 + 200 - 50 - 25 = 225
 *
 * Note: You MUST use a function sumAllObjectProperties from TestUtils object
 * Note: DON'T require/import TestUtils from a test/testUtils
 *
 * @param {{ sumAllObjectProperties: function() }} TestUtils
 * @returns {function}
 */
function payments(TestUtils) {
  return function (incomes = {}, expenses = {}) {
    // ВАЖНО: вызываем с контекстом incomes и expenses
    const totalIncome = TestUtils.sumAllObjectProperties.call(incomes);
    const totalExpenses = TestUtils.sumAllObjectProperties.call(expenses);
    return totalIncome - totalExpenses;
  };
}

module.exports.payments = payments;
