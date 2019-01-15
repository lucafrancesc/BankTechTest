function Account(){
  this._balance = 0;
  this.statement = new Statement();
}

Account.prototype.deposit = function (amount) {
  this._balance += amount;
  this.statement.transaction(amount, this._balance);
}

Account.prototype.withdraw = function (amount) {
  if (this._balance >= amount){
    negAmount = amount * -1
    this._balance += negAmount;
    this.statement.transaction(negAmount, this._balance);
  } else {
    throw new Error ('You don\'t have enouth money. Please deposit.');
  }
}
