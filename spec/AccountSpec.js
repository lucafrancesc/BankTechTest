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
});
