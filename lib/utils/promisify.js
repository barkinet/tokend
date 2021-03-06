'use strict';

module.exports = function promisify(wrapper) {
  return new Promise(function action(resolve, reject) {
    wrapper(function handler(err, result) {
      if (err) {
        reject(err);
      }

      resolve(result);
    });
  });
};
