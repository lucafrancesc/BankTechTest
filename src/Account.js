'use strict';

function Account(statement = new Statement(), transactions = new Transactions()){
  this.balance = 0;
  this.statement = statement;
  this.transactions = transactions;
}

Account.prototype.deposit = function (amount) {
  this.balance += amount;
  this.transactions.singleTransaction(amount, this.balance);
  return this.balance;
}

Account.prototype.withdraw = function (amount) {
  if (amount <= this.balance){
    var negAmount = amount * -1;
    this.balance += negAmount;
    this.transactions.singleTransaction(negAmount, this.balance);
  } else {
    throw new Error ('You don\'t have enouth money. Please deposit.');
  }
  return this.balance;
}

Account.prototype.printStatement = function () {
  return this.statement.returnStatement(this.transactions.allTransactions);
};
