'use strict';

describe('Account', function(){
  var account;

  beforeEach(function() {
   account = new Account();
 });

   describe('Initial status', function() {
     it('Creates a new account', function(){
       expect(account).toBeDefined();
     });

     it('Initial balance', function(){
       expect(account._balance).toBe(0);
     });
   });

  describe('deposit', function() {
   it('Let you deposit some cash', function(){
     expect(account.deposit(1000)).toBe(1000);
   });

  });

  describe('withdraw', function() {
   it('Let you withdraw some cash', function(){
     account.deposit(1000);
     expect(account.withdraw(50)).toBe(950);
   });

   it('Throws an error if there is not enough in the account', function(){
     expect(function(){
       account.withdraw(50);
     }).toThrowError('You don\'t have enouth money. Please deposit.');
   });
  });

});
