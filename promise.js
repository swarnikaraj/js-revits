function promisall(promises) {
  let output = [];
  let counter = 0;
  if (!Array.isArray(promises)) {
    return;
  }

  if (promises.length == 0) {
    return Promise.resolve([]);
  }
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise()
        .then((val) => {
          output[index] = val;
          counter++;
          if (counter == promises.length) {
            resolve(output);
          }
        })
        .catch(reject);
    });
  });
}

function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    for (let p in promises) {
      p.then((val) => resolve(val)).catch((e) => reject(e));
    }
  });
}
