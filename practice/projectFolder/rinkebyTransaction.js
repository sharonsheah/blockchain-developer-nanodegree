var Web3 = require("web3")
var EthereumTransaction = require("ethereumjs-tx")
var web3 = new Web3('https://rinkeby.infura.io/v3/7a3c78f73a4b4afe829970a2bbb85b44')

// -- Step 2: Set the sending and receiving addresses for the transaction. 
var address1 = '0xa07b4d615FDa051F68D507DFfAF0BaAf986453D9'
var address2 = '0x442D85e7E7A9e1A0a376849EAa8766B5c799de66'

// -- Step 3: Check the balances of each address
web3.eth.getBalance(address1).then(console.log)
web3.eth.getBalance(address2).then(console.log)
web3.eth.getTransactionCount(address1).then(console.log)
// CREATE A TRANSACTION

// -- Step 4: Set up the transaction using the transaction variables as shown 
// -- Step 5: View the raw transaction rawTransaction
// -- Step 6: Check the new account balances (they should be the same)
var address1Nonce = web3.eth.getTransactionCount(address1)
var rawTransaction = {
  nonce: address1Nonce + 1,
  to: address2,
  gasPrice: 20000,
  gasLimit: 30000,
  value: 10,
  data: ''
}

// SIGN THE TRANSACTION

// -- Step 7: Sign the transaction with the Hex value of the private key of the sender

var privateKeySender = '309866417092f373690b947f3d3a7fd8fb55c7d0ac8c7ddbfce4d1062242056c'
var privateKeySenderHex = new Buffer.from(privateKeySender, 'hex')
var transaction = new EthereumTransaction(rawTransaction)
transaction.sign(privateKeySenderHex)

// SEND THE TRANSACTION TO THE NETWORK

// -- Step 8: Send the serialized signed transaction to the Ethereum network. var serializedTransaction = transaction.serialize(); web3.eth.sendSignedTransaction(serializedTransaction);

var serializedTransaction = transaction.serialize()
web3.eth.sendSignedTransaction(serializedTransaction)