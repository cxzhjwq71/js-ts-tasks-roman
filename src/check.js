// Импорт функций — без src, потому что файл уже внутри src
const getDistance = require('./getDistance');
const getMaximalSequence = require('./getMaximalSequence');
const hasProperty = require('./hasProperty');
const removeItems = require('./removeItems');
const partialSum = require('./partialSum');
const hundredAfterOdd = require('./hundredAfterOdd');
const diffElems = require('./diffElems');
const maxCommonSub = require('./maxCommonSub');
const replacement = require('./replacement');

// Проверка каждой функции вручную

console.log('--- getDistance ---');
console.log(getDistance({ x: 0, y: 0 }, { x: 1, y: 1 })); // Ожидаем: 1.41
console.log(getDistance({ x: 0, y: 0 }, { x: 10, y: 10 })); // Ожидаем: 14.14

console.log('--- getMaximalSequence ---');
console.log(getMaximalSequence([1, 2, 2, 2, 3])); // Ожидаем: [2, 2, 2]

console.log('--- hasProperty ---');
console.log(hasProperty({ a: 1 }, 'a')); // true
console.log(hasProperty({ a: 1 }, 'b')); // false

console.log('--- removeItems ---');
console.log(removeItems([1, 2, 3, 2, 4], 2)); // Ожидаем: [1, 3, 4]

console.log('--- partialSum ---');
console.log(partialSum([1, 2, 3, 4])); // Ожидаем: [0, 1, 3, 6, 10]

console.log('--- hundredAfterOdd ---');
console.log(hundredAfterOdd([1, 2, 3, 456, 78, 2, 777125, 4]));
// Ожидаем: [1, 100, 2, 3, 100, 456, 78, 2, 777125, 100, 4]

console.log('--- diffElems ---');
console.log(diffElems([1, 2, 2, 3])); // Ожидаем: 3

console.log('--- maxCommonSub ---');
console.log(maxCommonSub('abcde', 'bcdef')); // Ожидаем: 'bcde'

console.log('--- replacement ---');
console.log(replacement([1, -2, 10, 123, 1000, -9999])); // Ожидаем: [1, 1, 2, 3, 4, 4]
