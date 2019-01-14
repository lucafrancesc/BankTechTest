describe('User', function(){
  var user;

  beforeEach(function() {
   user = new User('Luca');
 });

 it('Creates a new user', function(){
   expect(user).toBeDefined();
 });

 it('Saves the username', function(){
   expect(user.name).toBe('Luca');
 });

});
