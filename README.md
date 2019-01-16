Bank Tech Test

I started out by adding Jasmine to my folder to test my code.
When I began the test I created the Account constructor which was managing everything.
After that I moved the function related to the transactions in the Transaction and the statement into the Statement constructor.
The Account constructor takes care of the balance and deposit/withdraw, the Transaction one saves all the transactions into an array and the statement prints out the heading and the list of transaction.


![alt text](https://github.com/lucafrancesc/BankTechTest/blob/master/Screenshot%202019-01-15%20at%2015.29.05.png)

```
var account = new Account();
account.deposit(100);
account.withdraw(5);
account.statement.printStatement(account.transactions._allTransactions);
```
