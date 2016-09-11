'use strict';
const xmlToJson = require('xml-to-json');

class ToJson {
  constructor() {
  }

  // TODO: wether to use cb or promise
  convert(dir, cb) {
    return new Promise((resolve, reject) => {
      try {
        xmlToJson({input: dir}, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      } catch (err) {
        reject(err);
      }
    });
  }
}

module.exports = new ToJson();
