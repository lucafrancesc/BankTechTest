function Statement(){
  this._transactions = []
};

Statement.prototype.heading = function () {
  return 'Date		||   Credit || Debit  || Balance';
};

Statement.prototype.transaction = function (amount, balance) {
  var date = new Date();
  var transactionDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
  this._transactions.push([transactionDate, amount, balance]);
}

Statement.prototype.allTransactions = function (){
  console.log(this.heading())
  for (var i = 0; i < this._transactions.length; i++) {
    if(this._transactions[i][1] > 0){
      console.log(`${this._transactions[i][0]}	||   ${this._transactions[i][1]}              || ${this._transactions[i][2]}`);
    } else {
      console.log(`${this._transactions[i][0]}	||            ||${this._transactions[i][1] * -1}     || ${this._transactions[i][2]}`);
    }
  }
}
