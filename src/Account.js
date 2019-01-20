'use strict';

function Account(statement = new Statement(), transactions = new Transactions()){
  var hidden = {
    balance: 0,
    statement: statement,
    transactions: transactions
  }

  this._balance = function changeBalance(amount = 0) {
    hidden['balance'] += amount
  }

  this._checkBalance = function balanceCheck() {
    return hidden['balance']
  }

  this._statement = function statement() {
    return hidden['statement']
  }
  this._transactions = function transactions() {
    return hidden['transactions']
  }
}

Account.prototype.deposit = function (amount) {
  this._balance(amount)
  this._transactions().singleTransaction(amount, this._checkBalance());
  return this._checkBalance();
}

Account.prototype.withdraw = function (amount) {
  if (amount <= this._checkBalance()){
    var negAmount = amount * -1;
    this._balance(negAmount)
    this._transactions().singleTransaction(negAmount, this._checkBalance());
  } else {
    throw new Error ('You don\'t have enouth money. Please deposit.');
  }
  return this._checkBalance();
}

Account.prototype.printStatement = function () {
  return this._statement().returnStatement(this._transactions().allTransactions);
};
