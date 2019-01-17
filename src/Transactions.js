'use strict';

function Transactions(){
  this.allTransactions = [];
};

Transactions.prototype.singleTransaction = function (amount, balance) {
  var date = new Date();
  var transactionDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  this.allTransactions.unshift([transactionDate, amount.toFixed(2), balance.toFixed(2)]);
  return this.allTransactions;
}
