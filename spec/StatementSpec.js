describe('Statement', function(){
  var statement;
  var transactions;

  beforeEach(function() {
   statement = new Statement();
   transactions = jasmine.createSpy('transactions');
 });

  describe('returnStatement', function() {
   it('Prints the header if no transactions', function(){
     expect(statement.returnStatement(transactions)).toEqual('Date || Credit || Debit || Balance\n');
   });
  });


});
