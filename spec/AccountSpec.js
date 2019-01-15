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
   it('Let\'s you deposit some cash', function(){
     account.deposit(1000)
     expect(account._balance).toBe(1000);
   });

  });

  describe('withdraw', function() {
   it('Let\'s you withdraw some cash', function(){
     account.deposit(1000);
     account.withdraw(50);
     expect(account._balance).toBe(950);
   });

   it('Throws an error if there is not enough in the account', function(){
     expect(function(){
       account.withdraw(50);
     }).toThrowError('You don\'t have enouth money. Please deposit.');
   });
  });

});
