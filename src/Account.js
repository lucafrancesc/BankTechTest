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

Account.prototype.deposit = function (amount) {
  if (this._locked === true){
    throw new Error ('The account is locked. Please enter your PIN');
  } else {
    this._balance += amount;
    return this._balance
  }
}
