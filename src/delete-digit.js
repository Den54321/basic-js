const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let i = 0;
  let j = 1;
 while(+(`${n}`[i]) == +(`${n}`[j]) && j < `${n}`.length ) {
   i++;
   j++;
 }

 return  +(`${n}`[i]) >= +(`${n}`[j]) ?  +(`${n}`.slice(0, i+1) + `${n}`.slice(j + 1)) : +(`${n}`.slice(0, i) + `${n}`.slice(j));
  
}

module.exports = {
  deleteDigit
};
