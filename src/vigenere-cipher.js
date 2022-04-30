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
  constructor(variant = true) {
    this.reversedVariant = !variant
    this.aCode = 'A'.charCodeAt()
  }

  encrypt(msg, key) {

    if (msg === undefined || key === undefined)   throw Error('Incorrect arguments!');
    
    msg = msg.toUpperCase()
    key = key.toUpperCase()

    let encodedBuffer = []
    let keyPosition = 0

    for (let char of msg) {
      if (char < 'A' || char > 'Z') {
        encodedBuffer.push(char.charCodeAt())
        continue;
      }
      const msgCharCode = char.charCodeAt() - this.aCode
      const keyCharCode = key.charCodeAt(keyPosition) - this.aCode
      encodedBuffer.push((msgCharCode + keyCharCode) % 26 + this.aCode)
      keyPosition = (keyPosition + 1) % key.length
    }

    if (this.reversedVariant) {
      encodedBuffer = encodedBuffer.reverse()
    }

    return encodedBuffer.map(x => String.fromCharCode(x)).join('')

  }

  decrypt(msg, key) {

    if (msg === undefined || key === undefined) {
      throw Error('Incorrect arguments!')
    }

    msg = msg.toUpperCase()
    key = key.toUpperCase()

    let decodedBuffer = []
    let keyPosition = 0

    for (let char of msg) {
      if (char < 'A' || char > 'Z') {
        decodedBuffer.push(char.charCodeAt())
        continue
      }
      const msgCharCode = char.charCodeAt() - this.aCode
      const keyCharCode = key.charCodeAt(keyPosition) - this.aCode
      decodedBuffer.push((msgCharCode - keyCharCode + 26) % 26 + this.aCode)
      keyPosition = (keyPosition + 1) % key.length
    }

    if (this.reversedVariant) {
      decodedBuffer = decodedBuffer.reverse()
    }

    return decodedBuffer.map(x => String.fromCharCode(x)).join('')
  }

}



const directMachine = new VigenereCipheringMachine();

module.exports = {
  VigenereCipheringMachine
};
