const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {
  let season  = ['spring', 'summer', 'fall', 'winter'];
  let error = 'Unable to determine the time of year!';
  if(date.getFullYear() == 2023) return 'Unable to determine the time of year!'; 
  if(date.getMonth() > 11) return 'Invalid date!'; 
  
  if(date.getMonth() >= 0  && date.getMonth() < 2 || date.getMonth() == 11) return season[3];
  else if (date.getMonth() >= 2  && date.getMonth() <= 4) return season[0];
  else if (date.getMonth() >= 5  && date.getMonth() <= 7) return season[1];
  else if (date.getMonth() >= 8  && date.getMonth() <= 10) return season[2];
  else return   error;
}

module.exports = {
  getSeason
};
