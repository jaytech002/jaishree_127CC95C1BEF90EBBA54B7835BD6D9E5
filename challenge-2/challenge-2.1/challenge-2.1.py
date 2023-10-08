class BankAccount:
    def __init__(self, account_number, account_holder_name, initial_balance=0):
        self.__account_number = account_number
        self.__account_holder_name = account_holder_name
        self.__account_balance = initial_balance

    def deposit(self, amount):
        if amount > 0:
            self.__account_balance += amount
            return f"Deposited ${amount}. New balance: ${self.__account_balance}"
        else:
            return "Invalid deposit amount. Amount must be greater than zero."

    def withdraw(self, amount):
        if amount > 0 and amount <= self.__account_balance:
            self.__account_balance -= amount
            return f"Withdrew ${amount}. New balance: ${self.__account_balance}"
        elif amount > self.__account_balance:
            return "Insufficient funds."
        else:
            return "Invalid withdrawal amount. Amount must be greater than zero."

    def display_balance(self):
        return f"Account Balance for {self.__account_holder_name}: ${self.__account_balance}"


# Testing the BankAccount class
if __name__ == "__main__":
    # Creating an instance of the BankAccount class
    account1 = BankAccount("123456789", "John Doe", 1000)

    # Depositing and withdrawing money
    print(account1.deposit(500))
    print(account1.withdraw(200))
    print(account1.display_balance())

    # Attempting an invalid withdrawal
    print(account1.withdraw(1500))

