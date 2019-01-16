'use strict';

function Transactions(){
  this._allTransactions = [];
};

Transactions.prototype.singleTransaction = function (amount, balance) {
  var date = new Date();
  var transactionDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  this._allTransactions.unshift([transactionDate, amount.toFixed(2), balance.toFixed(2)]);
  return this._allTransactions;
}
