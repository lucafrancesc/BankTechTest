describe('Account', function(){
  var account;

  beforeEach(function() {
   account = new Account(12345);
 });

 it('Creates a new account with a pin', function(){
   expect(account).toBeDefined();
 });

 it('Saves the pin', function(){
   expect(account._pin).toBe(12345);
 });

 it('Doesn\'t let you access the account if pin is wrong', function(){
   expect(function(){
     account.enterPin(1234)
   }).toThrowError('Wrong PIN!');
 });

 it('If pin is wrong', function(){
   expect(account._locked).toBe(true);
 });

 it('Let\'s you inside your account if the pin is right', function(){
    account.enterPin(12345);
    expect(account._locked).toBe(false);
 });




});
