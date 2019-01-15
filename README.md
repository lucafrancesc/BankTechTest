Bank Tech Test

I started out by adding Jasmine to my folder to test my code.
When I began the test I created the Account constructor which was managing everything.
After that I moved the function related to the transaction and the statement into the Statement constructor.


![Alt text](/Users/apple/Projects/BankTechTest/Screenshot 2019-01-15 at 15.00.07.png)

```
var account = new Account();
account.deposit(100)
account.withdraw(5)
account.statement.printAllTransactions();
```
