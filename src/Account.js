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

Account.prototype.deposit = function (amount) {
  this._balance += amount
};
