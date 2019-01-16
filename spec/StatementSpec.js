describe('Statement', function(){
  var statement;
  var transactions;

  beforeEach(function() {
   statement = new Statement();
   transactions = jasmine.createSpy('transactions');
 });

  describe('printStatement', function() {
   it('Prints the header if no transactions', function(){
     expect(statement.printStatement(transactions)).toEqual('Date || Credit || Debit || Balance \n');
   });
  });


});
