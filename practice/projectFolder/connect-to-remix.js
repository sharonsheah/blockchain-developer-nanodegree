var Web3 = require("web3")
var web3 = new Web3("HTTP://127.0.0.1:7545")

web3.eth.getTransactionCount("0x9D0a6569f8F055335f1B1BC617d0eFf7fd26A64B").then(console.log)