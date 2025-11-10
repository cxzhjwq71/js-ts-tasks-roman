// 1. compareTwoNumbers
function compareTwoNumbers(a, b) {
  return a > b ? a : b;
}
console.log('compareTwoNumbers:', compareTwoNumbers(5, 8)); // 8

// 2. digitsSum
function digitsSum(num) {
  return String(num)
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0);
}
console.log('digitsSum:', digitsSum(123)); // 6

// 3. volumeCone
function volumeCone(radius, height) {
  return (1 / 3) * Math.PI * radius * radius * height;
}
console.log('volumeCone:', volumeCone(3, 5)); // ≈ 47.12

// 4. sumTwoNumbers
function sumTwoNumbers(a, b) {
  return a + b;
}
console.log('sumTwoNumbers:', sumTwoNumbers(4, 7)); // 11

// 5. sumInRange
function sumInRange(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}
console.log('sumInRange:', sumInRange(1, 5)); // 15

// 6. evalExpr
function evalExpr(expr) {
  return eval(expr);
}
console.log('evalExpr:', evalExpr('2 + 3 * 4')); // 14

// 7. divider
function divider(a, b) {
  return a % b === 0;
}
console.log('divider (10, 2):', divider(10, 2)); // true
console.log('divider (10, 3):', divider(10, 3)); // false

// 8. compareSalary
function compareSalary(firstSalary, secondSalary, thirdSalary) {
  const max = Math.max(firstSalary, secondSalary, thirdSalary);
  const min = Math.min(firstSalary, secondSalary, thirdSalary);
  return max - min;
}
console.log('compareSalary:', compareSalary(3000, 4500, 2800)); // 1700

// 9. backToFront
function backToFront(str) {
  return str.split('').reverse().join('');
}
console.log('backToFront:', backToFront('hello')); // "olleh"
