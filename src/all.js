function all(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    promises.forEach((p, index) => {
      p.then(value => {
        results[index] = value;
        completed++;

        if (completed === promises.length) {
          resolve(results);
        }
      }).catch(reject);
    });
  });
}

module.exports = { all };
