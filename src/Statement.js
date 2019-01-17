'use strict';

function Statement(){
	this._heading = 'Date || Credit || Debit || Balance\n';
}

Statement.prototype.returnStatement = function (transaction){
	var string = this._heading;
	for (var i = 0; i < transaction.length; i++) {
		if(transaction[i][1] > 0){
			string += transaction[i][0] + ' || ' + transaction[i][1] + ' || || ' + transaction[i][2] + '\n';
		} else {
			string += transaction[i][0] + ' || || ' + (transaction[i][1] * -1).toFixed(2) + ' || ' + transaction[i][2] + '\n';
		}
	}
	return string;
};
