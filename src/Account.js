function Account(pin){
  this._pin = pin;
}

Account.prototype.enterPin = function (pin) {
  if (pin !== this._pin){
    throw new Error ('Wrong PIN!');
  } else {
    return 'What would you like to do?'
  }
}
