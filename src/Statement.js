function Statement(){
  this._transactions = [];
  this._heading = 'Date || Credit || Debit || Balance';
};

Statement.prototype.transaction = function (amount, balance) {
  var date = new Date();
  var transactionDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
  this._transactions.unshift([transactionDate, amount.toFixed(2), balance.toFixed(2)]);
}

Statement.prototype.printAllTransactions = function (){
  var string = ''
  for (var i = 0; i < this._transactions.length; i++) {
    if(this._transactions[i][1] > 0){
      string += `${this._transactions[i][0]} || ${this._transactions[i][1]} ||  || ${this._transactions[i][2]}` + '\n';
    } else {
      string += `${this._transactions[i][0]} || || ${(this._transactions[i][1] * -1).toFixed(2)}  || ${this._transactions[i][2]}` + '\n';
    }
  }
  return this._heading + '\n' + string
}
