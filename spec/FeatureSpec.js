'use strict';

describe('Features', function(){
  var account;
  var statement;
  var transactions;

  beforeEach(function() {
    statement = new Statement();
    transactions = new Transactions();
    account = new Account(statement, transactions);
    jasmine.clock().install();
    var baseTime = new Date(2013, 9, 23);
    jasmine.clock().mockDate(baseTime);
   });

   afterEach(function() {
    jasmine.clock().uninstall();
   });

  describe('full test', function(){
    it('it can deposit money in a new account', function(){
      account.deposit(10);
      expect(account._checkBalance()).toEqual(10);
    });

    it('it can withdraw money from that account', function(){
      account.deposit(10);
      account.withdraw(5);
      expect(account._checkBalance()).toEqual(5);
    });

    it('can print the statement', function(){
      account.deposit(1000);
      account.withdraw(50);
      var expectedStatement = `Date || Credit || Debit || Balance\n2013/10/23 || || 50.00 || 950.00\n2013/10/23 || 1000.00 || || 1000.00\n`
      expect(account.printStatement()).toEqual(expectedStatement);

    });
  });
});
