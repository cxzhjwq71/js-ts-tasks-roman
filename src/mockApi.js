function mockApi(response, delay) {
  return function (mode) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (mode === 'resolve') resolve(response);
        else reject(response);
      }, delay);
    });
  };
}

module.exports = { mockApi };
