describe('Account', function(){
  var account;

  beforeEach(function() {
   account = new Account(12345);
 });

   describe('Initial status', function() {
     it('Creates a new account with a pin', function(){
       expect(account).toBeDefined();
     });

     it('Saves the pin', function(){
       expect(account._pin).toBe(12345);
     });

     it('If pin is wrong', function(){
       expect(account._locked).toBe(true);
     });

     it('Initial balance', function(){
       expect(account._balance).toBe(0);
     });
   });

  describe('enterPin', function() {
    it('Doesn\'t let you access the account if pin is wrong', function(){
      expect(function(){
        account.enterPin(1234)
      }).toThrowError('Wrong PIN!');
    });

    it('Let\'s you inside your account if the pin is right', function(){
       account.enterPin(12345);
       expect(account._locked).toBe(false);
    });
   });

   describe('exit', function(){
     it('Sets the _locked value back to true', function(){
       account.enterPin(12345);
       account.exit();
       expect(account._locked).toBe(true)
     })
   });

  describe('deposit', function() {
   it('Let\'s you deposit some cash', function(){
     account.enterPin(12345);
     account.deposit(1000)
     expect(account._balance).toBe(1000);
   });

   it('Does not let you deposit if the account is locked', function(){
     expect(function(){
       account.deposit(1000)
     }).toThrowError('The account is locked. Please enter your PIN');
   });
  });

  describe('withdraw', function() {
   it('Let\'s you withdraw some cash', function(){
     account.enterPin(12345);
     account.deposit(1000);
     account.withdraw(50);
     expect(account._balance).toBe(950);
   });

   it('Does not let you withdraw if the account is locked', function(){
     expect(function(){
       account.withdraw(50);
     }).toThrowError('The account is locked. Please enter your PIN');
   });

   it('Throws an error if there is not enough in the account', function(){
     account.enterPin(12345);
     expect(function(){
       account.withdraw(50);
     }).toThrowError('You don\'t have enouth money. Please deposit.');
   });
  });


});
