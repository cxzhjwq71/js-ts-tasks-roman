console.log('Файл censorship.js запустился!');

module.exports.censorship = function censorship(forbidden) {
  return function (text) {
    let result = text;
    for (let word of forbidden) {
      const stars = '*'.repeat(word.length);
      result = result.replaceAll(word, stars);
    }
    return result;
  };
};

const forbidden = ['bad', 'ugly'];
const censor = module.exports.censorship(forbidden);
console.log('Результат:', censor('This is bad and ugly'));
