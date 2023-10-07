class BankAccount {
    constructor(accountNumber, accountHolderName, initialBalance) {
        this._accountNumber = accountNumber;
        this._accountHolderName = accountHolderName;
        this._accountBalance = initialBalance || 0;
    }

    // Method to deposit money into the account
    deposit(amount) {
        if (amount > 0) {
            this._accountBalance += amount;
            console.log(`Deposited $${amount}. New balance: $${this._accountBalance}`);
        } else {
            console.log("Invalid deposit amount. Amount must be greater than 0.");
        }
    }

    // Method to withdraw money from the account
    withdraw(amount) {
        if (amount > 0 && amount <= this._accountBalance) {
            this._accountBalance -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this._accountBalance}`);
        } else if (amount > this._accountBalance) {
            console.log("Insufficient funds.");
        } else {
            console.log("Invalid withdrawal amount. Amount must be greater than 0.");
        }
    }

    // Method to display the account balance
    displayBalance() {
        console.log(`Account balance for ${this._accountHolderName}: $${this._accountBalance}`);
    }
}

// Create an instance of the BankAccount class
const myAccount = new BankAccount("12345", "John Doe", 1000);

// Test deposit and withdrawal functionality
myAccount.displayBalance(); // Display initial balance
myAccount.deposit(500);     // Deposit $500
myAccount.withdraw(200);    // Withdraw $200
myAccount.withdraw(1500);   // Attempt to withdraw more than the balance
myAccount.withdraw(-50);    // Attempt to withdraw a negative amount
myAccount.displayBalance(); // Display updated balance

