function Account(pin){
  this._pin = pin;
  this._locked = true;
  this._balance = 0;
  this._transactions = []
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
  return 'Logged out'
}

Account.prototype.statement = function (amount) {
  if (this._locked === true){
    throw new Error ('The account is locked. Please enter your PIN');
  } else {
    return this._balance
  }
}

Account.prototype.allTransactions = function (amount) {
  if (this._locked === true){
    throw new Error ('The account is locked. Please enter your PIN');
  } else {
    console.log(this.heading());
    this._transactions.forEach(function(element){
      if(element[1] > 0){
        console.log(`${element[0]}	||   ${element[1]}              || ${element[2]}`)
      } else {
        console.log(`${element[0]}	||            ||${element[1] * -1}     || ${element[2]}`)
      }
    })
  }
}

Account.prototype.transaction = function (amount) {
  var date = new Date();
  var transactionDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
  this._transactions.push([transactionDate, amount, this._balance]);
}

Account.prototype.deposit = function (amount) {
  if (this._locked === true){
    throw new Error ('The account is locked. Please enter your PIN');
  } else {
    this._balance += amount;
    this.transaction(amount);
    return this._balance;
  }
}

Account.prototype.withdraw = function (amount) {
  if (this._locked === true){
    throw new Error ('The account is locked. Please enter your PIN');
  } else if (this._balance >= amount){
    negAmount = amount * -1
    this._balance += negAmount;
    this.transaction(negAmount);
    return this._balance;
  } else {
    throw new Error ('You don\'t have enouth money. Please deposit.');
  }
}

Account.prototype.heading = function () {
  return 'Date		||   Credit || Debit  || Balance';
};
