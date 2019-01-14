function Account(pin){
  this._pin = pin;
  this._locked = true;
  this._balance = 0;
}

Account.prototype.enterPin = function (pin) {
  if (pin !== this._pin){
    throw new Error ('Wrong PIN!');
  } else {
    this._locked = false;
  }
}
