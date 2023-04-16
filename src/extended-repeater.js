const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater( str, options ) {
  let str1 ='';
  let rep1 = 0 ;
  let sep1 ='+' ;
  let str2 ='';
  let rep2 = 0 ;
  let sep2 ='|';

  if(str) str1 += `${str}`;
  if(options.repeatTimes) rep1 = options.repeatTimes;
  if(options.separator)  sep1 = options.separator;
  
  if(options.hasOwnProperty('addition')) str2 += `${options.addition}`;
  if(options.additionRepeatTimes) rep2 = options.additionRepeatTimes;
  if(options.additionSeparator) sep2 = options.additionSeparator;
 console.log(str2)

  function rep (str, sep, repit ){
    let res = '';
    for(let i = 0; i < repit; i++ ){
      if(i + 1 < repit) res += str + sep; 
      else res += str;  
    }
    if(repit === 0) res += str;
    return res;
  }
  return rep(str + rep(str2, sep2, rep2), sep1, rep1);

}

module.exports = {
  repeater
};
