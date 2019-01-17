'use strict';

describe('Account', function(){
	var account;
	var statement;
	var transactions;

	beforeEach(function() {
		statement = jasmine.createSpyObj('statement',['returnStatement']);
		transactions = jasmine.createSpyObj('transactions',['singleTransaction']);
		account = new Account(statement, transactions);
	});

	describe('Initial status', function() {
		it('Creates a new account', function(){
			expect(account).toBeDefined();
		});

		it('expects transactions to exist', function(){
			expect(transactions.singleTransaction).toBeDefined();
		});

		it('expects statement to exist', function(){
			expect(statement.returnStatement).toBeDefined();
		});

		it('Initial balance', function(){
			expect(account.balance).toBe(0);
		});
	});

	describe('deposit', function() {
		it('Let you deposit some cash', function(){
			expect(account.deposit(1000)).toBe(1000);
			expect(transactions.singleTransaction).toHaveBeenCalled();
		});
	});

	describe('withdraw', function() {
		it('Let you withdraw some cash', function(){
			account.deposit(1000);
			expect(account.withdraw(50)).toBe(950);
			expect(transactions.singleTransaction).toHaveBeenCalled();
		});

		it('Throws an error if there is not enough in the account', function(){
			expect(function(){
				account.withdraw(50);
			}).toThrowError('You don\'t have enouth money. Please deposit.');
		});
	});

	describe('printStatement', function() {
		it('prints the statement', function(){
			account.deposit(1000);
			account.withdraw(50);
			expect(transactions.singleTransaction).toHaveBeenCalled();
			account.printStatement();
			expect(statement.returnStatement).toHaveBeenCalled();
		});
	});
});
