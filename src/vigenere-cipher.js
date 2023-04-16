const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
   
  constructor (type){
    if(type === false) this.toReverse = true;
    else this.toReverse = false; 
  }

  encrypt(string, key) {
    if(!string || !key) return 'Incorrect arguments!';
    let res = '';
    let curentSymbol;
    let curentSymbolKey;
    let resSymbol;
    let itemKey = 0;

    for(let i = 0; i < string.length; i++){
      curentSymbolKey = key[itemKey].toUpperCase().charCodeAt() - 65;
      curentSymbol = string[i].toUpperCase().charCodeAt() - 65;
      if(curentSymbol >= 0 && curentSymbol <= 25){
        resSymbol =  (curentSymbol + curentSymbolKey);
        if(resSymbol > 25) resSymbol -= 26;
        itemKey++;
        if(key.length <=  itemKey) itemKey = 0;

        this.toReverse ? res = String.fromCharCode(resSymbol + 65) + res : res += String.fromCharCode(resSymbol + 65);

      }

      else this.toReverse ? res = string[i] + res : res += string[i]
    }
    return res;
  }
  decrypt(string, key) {
    if(!string || !key) return 'Incorrect arguments!';
    let res = '';
    let curentSymbol;
    let curentSymbolKey;
    let resSymbol;
    let itemKey = 0;

    for(let i = 0; i < string.length; i++){
      curentSymbolKey = key[itemKey].toUpperCase().charCodeAt() - 65;
      curentSymbol = string[i].toUpperCase().charCodeAt() - 65;
      if(curentSymbol >= 0 && curentSymbol <= 25){
        resSymbol =  (curentSymbol - curentSymbolKey);
        if(resSymbol < 0) resSymbol += 26;
        itemKey++;
        if(key.length <=  itemKey) itemKey = 0;

        this.toReverse ? res = String.fromCharCode(resSymbol + 65) + res : res += String.fromCharCode(resSymbol + 65);

      }

      else this.toReverse ? res = string[i] + res : res += string[i]
    }
    return res;
  }
}

module.exports = {
  VigenereCipheringMachine
};
