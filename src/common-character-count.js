const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let res = 0;
  let str1 = s1;
  let str2 = s2;
  if(s2.length > s1.length) {str1 = s2; str2 = s1}

    for(let i = 0; i < str1.length; i++ ){

      for(let j = 0; j < str2.length; j++){

        if(str1[i] === str2[j]) {
            res ++; 
            str2 = str2.slice(0, j) + str2.slice(j + 1, str2.length);
            str1 = str1.slice(0, i) + str1.slice(i + 1, str1.length);
            i = 0; j =0;
          }

      }
    }
  return res;
}

module.exports = {
  getCommonCharacterCount
};
