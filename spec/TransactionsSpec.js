'use strict';

describe('transactions', function(){
	var transaction;

	beforeEach(function() {
		transaction = new Transactions();
		jasmine.clock().install();
		var baseTime = new Date(2013, 9, 23);
		jasmine.clock().mockDate(baseTime);
	});

	afterEach(function() {
		jasmine.clock().uninstall();
	});

	describe('singleTransaction', function() {
		it('pushes date, amount and balance into the transactions array', function(){
			expect(transaction.singleTransaction(1000,1000)).toEqual([ [ '2013/10/23', '1000.00', '1000.00' ] ]);
		});
	});
});
