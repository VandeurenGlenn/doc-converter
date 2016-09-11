'use strict';
const {writeFile} = require('fs');
var _objectify = input => {
  // if ( Array.isArray(input)) {
  for (var i in input) {
    if (input.hasOwnProperty(i)) {
      if (!results) {
        var results = {};
      }

        console.log(i);
      if (i === '$') {
        results['uid'] = input[i];
      } else {
        results[i] = input[i];
      }
      console.log(results[i]);
    }
  }
  // for (var i = 0; i < input.length; i++) {
  //   if (!results) {
  //     var results = {};
  //   }
  //   results[i] = input[i];
  //   console.log(results[i]);
  // }
  input = results;
  results = null;
  // }
  return input;
}

/** converts data to an Object when an Array, validates to firebase pushable data */
 var _basify = data => {
   // TODO: check if array & create method to convert to Object, replace symbols in `keys`
  //  this.input = _objectify(data);
   for (var results in data) {
     if (data.hasOwnProperty(results)) {
       for (var result in data[results]) {
         if (data[results].hasOwnProperty(result)) {
           var temp = result.replace('/', '');
           temp = result.replace('$', 'uid');
           data[results][temp] = data[results][result];
           if (result.includes('/')) {
             delete data[results][result];
           }
         }
       }
     }
   }
   return data;
 }

module.exports = (dest, data) => {
  return new Promise((resolve, reject) => {
    data = _basify(data);
    writeFile(dest, JSON.stringify(data, null, 2), (err, result) => {
      console.log(err);
      if (err) {
        reject(err);
      } else {
        resolve('succes');
      }
    });
  });
};
