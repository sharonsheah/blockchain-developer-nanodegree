// CONFIGURATION

// -- Step 1: Set up the appropriate configuration 
var Web3 = require("web3")
var EthereumTransaction = require("ethereumjs-tx")
var web3 = new Web3('HTTP://127.0.0.1:7545')

// -- Step 2: Set the sending and receiving addresses for the transaction. 
var address1 = '0x9D0a6569f8F055335f1B1BC617d0eFf7fd26A64B'
var address2 = '0xdd0F70F7B97DDD38061997020D8f1807E277924a'

// -- Step 3: Check the balances of each address
web3.eth.getBalance(address1).then(console.log)
web3.eth.getBalance(address2).then(console.log)

// CREATE A TRANSACTION

// -- Step 4: Set up the transaction using the transaction variables as shown 
// -- Step 5: View the raw transaction rawTransaction
// -- Step 6: Check the new account balances (they should be the same)
var rawTransaction = {
  nonce: 0,
  to: address2,
  gasPrice: 20000000,
  gasLimit: 30000,
  value: 100,
  data: ''
}

// SIGN THE TRANSACTION

// -- Step 7: Sign the transaction with the Hex value of the private key of the sender

var privateKeySender = 'aed5fd07fb6717e0634ad16bb7a47edcb04022247046dae614af85357f501e4d'
var privateKeySenderHex = new Buffer.from(privateKeySender, 'hex')
var transaction = new EthereumTransaction(rawTransaction)
transaction.sign(privateKeySenderHex)

// SEND THE TRANSACTION TO THE NETWORK

// -- Step 8: Send the serialized signed transaction to the Ethereum network. var serializedTransaction = transaction.serialize(); web3.eth.sendSignedTransaction(serializedTransaction);

var serializedTransaction = transaction.serialize()
web3.eth.sendSignedTransaction(serializedTransaction)