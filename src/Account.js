'use strict';

function Account(statement = new Statement(), transactions = new Transactions()){
  this._balance = 0;
  this.statement = statement;
  this.transactions = transactions;
}

Account.prototype.deposit = function (amount) {
  this._balance += amount;
  this.transactions.singleTransaction(amount, this._balance);
  return this._balance;
}

Account.prototype.withdraw = function (amount) {
  if (this._balance >= amount){
    var negAmount = amount * -1;
    this._balance += negAmount;
    this.transactions.singleTransaction(negAmount, this._balance);
  } else {
    throw new Error ('You don\'t have enouth money. Please deposit.');
  }
  return this._balance
}
