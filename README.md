Bank Tech Test

I started out by adding [Jasmine](https://github.com/jasmine/jasmine/releasesto) my folder to test my code.
When I began I created the Account constructor which was managing everything.
After that I moved the function related to the transactions in the Transaction and the statement into the Statement constructor.
The Account constructor takes care of the balance and deposit/withdraw, the Transaction one saves all the transactions into an array and the statement prints out the heading and the list of transaction.
To run all the tests you can copy in your browser the SpecRunner.html url.

![alt text](https://github.com/lucafrancesc/BankTechTest/blob/master/Screenshot%202019-01-15%20at%2015.29.05.png)

You can use this commands to run the code in the developer tools console (Cmd + Option + I).

>create an instance of account
```
var account = new Account();
```

>deposit money in the account
```
account.deposit(1000);
account.deposit(2000);
```

>withdraw some money
```
account.withdraw(500);
```

>print the Statement
```
account.printStatement();
```

Linter
First of all you will have to download [NodeJS](https://nodejs.org/en/download/) if you don't have it.
This was the first time I used a linter with JS and I have found [ESLint](https://eslint.org/) simple enough.

After having installed NodeJS you can run this commands in your terminal to check your files.

```
$ npm init
$ npm i -g eslint
$ eslint src/**
$ eslint spec/**
```
