/**
 * Import crypto-js/SHA256 library
 */
const SHA256 = require('crypto-js/sha256');

/**
 * Class with a constructor for block 
 */
class Block {

	constructor(data){
		this.id = 0;
        this.nonce = 144444;
      	this.body = data;
      	this.hash = "";
    }

  	generateHash() {
      // Use this to create a temporary reference of the class object
      let self = this;

      var promise = new Promise(function(resolve, reject) {
        if (self.hash = SHA256(JSON.stringify(self)).toString()) {
          resolve(self);
        }
        else {
          reject(Error("It broke"));
        }
      });

      return promise
    }
}

// Exporting the class Block to be reuse in other files
module.exports.Block = Block;