describe('User', function(){
  var user;

  beforeEach(function() {
   user = new User('Luca');
 });

 it('creates new users', function(){
   expect(user).toBeDefined();
 });

 it('Saves the username', function(){
   expect(user.name).toBe('Luca');
 });

});
