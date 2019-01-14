function Account(pin){
  this._pin = pin;
  this._locked = true;
  this._balance = 0;
}

Account.prototype.enterPin = function (pin) {
  if (pin === this._pin){
    this._locked = false;
  } else {
    throw new Error ('Wrong PIN!');
  }
}

Account.prototype.exit = function () {
  this._locked = true;
};

Account.prototype.statement = function (amount) {
  if (this._locked === true){
    throw new Error ('The account is locked. Please enter your PIN');
  } else {
    return this._balance
  }
}

Account.prototype.deposit = function (amount) {
  if (this._locked === true){
    throw new Error ('The account is locked. Please enter your PIN');
  } else {
    this._balance += amount;
    return this._balance
  }
}

Account.prototype.withdraw = function (amount) {
  if (this._locked === true){
    throw new Error ('The account is locked. Please enter your PIN');
  } else if (this._balance >= amount){
    this._balance -= amount;
    return this._balance
  } else {
    throw new Error ('You don\'t have enouth money. Please deposit.');
  }
}
