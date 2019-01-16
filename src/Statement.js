'use strict';

function Statement(){
  this._heading = 'Date || Credit || Debit || Balance \n';
};

Statement.prototype.printStatement = function (transaction){
  var string = ''
  if (transaction.lenght === 0){
    return this._heading;
  } else {
    for (var i = 0; i < transaction.length; i++) {
      if(transaction[i][1] > 0){
        string += `${transaction[i][0]} || ${transaction[i][1]} ||  || ${transaction[i][2]}` + '\n';
      } else {
        string += `${transaction[i][0]} || || ${(transaction[i][1] * -1).toFixed(2)}  || ${transaction[i][2]}` + '\n';
      }
    }
  }
  return this._heading + string;
}
