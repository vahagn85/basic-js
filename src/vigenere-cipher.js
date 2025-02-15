const { NotImplementedError } = require("../extensions/index.js");

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
  constructor(simply = true) {
    this.simply = simply;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.alpLength = 26;
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    let j = 0;
    for (let msg of message) {
      if (this.alphabet.indexOf(msg) !== -1) {
        let msgIdx = this.alphabet.indexOf(msg);
        let keyIdx = this.alphabet.indexOf(key[j % key.length]);
        let alpIdx = msgIdx + keyIdx;
        if (alpIdx >= this.alpLength) {
          alpIdx = alpIdx - this.alpLength;
        }
        result += this.alphabet[alpIdx];
        j++;
      } else {
        result += msg;
      }
    }
    if (!this.simply) {
      return result.split("").reverse().join("");
    }
    return result;
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    let j = 0;
    for (let msg of message) {
      if (this.alphabet.indexOf(msg) !== -1) {
        let msgIdx = this.alphabet.indexOf(msg);
        let keyIdx = this.alphabet.indexOf(key[j % key.length]);
        let alpIdx = msgIdx - keyIdx;
        if (alpIdx < 0) {
          alpIdx = this.alpLength - alpIdx * -1;
        }
        result += this.alphabet[alpIdx];
        j++;
      } else {
        result += msg;
      }
    }
    if (!this.simply) {
      return result.split("").reverse().join("");
    }
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
