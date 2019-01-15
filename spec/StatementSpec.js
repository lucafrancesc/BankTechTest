describe('Statement', function(){
  var statement;
  var account;

  beforeEach(function() {
   account = new Account();
   statement = new Statement();
   var baseTime = new Date(2013, 9, 23);
   jasmine.clock().mockDate(baseTime);

 });

 it('Initial balance', function(){
   expect(statement._transactions).toEqual([]);
 });

describe('heading', function() {
  it('Shows the heading', function(){
    expect(statement.heading()).toBe('Date || Credit || Debit || Balance');
  });
});

  describe('transaction', function() {
   it('pushes date, amount and balance into the transactions array', function(){
     statement.transaction(1000,1000)
     expect(statement._transactions).toEqual([ [ '2013/10/23', 1000, 1000 ] ]);
   });
  });

  describe('allTransactions', function() {
   it('Let you check all transactions', function(){
     statement.transaction(1000,1000)
     expect(statement.printAllTransactions()).toEqual('Date || Credit || Debit || Balance' + '\n'
     + '2013/10/23 || 1000 ||  || 1000' + '\n');
   });

  });
});
