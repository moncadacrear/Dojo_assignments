class BankAccount:
    def __init__(self, int_rate, balance):
        self.intrate = int_rate
        self.account_balance = balance
	
    def deposit(self, amount):
        self.account_balance += amount
        return self 
    def withdraw(self, amount):
        if(self.account_balance < amount):
            self.account_balance -= 5
            self.account_balance -= 5
            print("insufficents funs")
            return self
        else:
            self.account_balance -= amount
            return self 
    def display_account_info(self):
            print(f"balance: {self.account_balance}")
            return self
    def yield_interest(self):
            if(self.account_balance == 0):
                # print(self.account_balance)
                return self 
            else:
                self.account_balance += self.account_balance * self.intrate
                return self


ivan = BankAccount(.12,200 )
willie = BankAccount(.44,300)

ivan.deposit(200).deposit(200).deposit(100).withdraw(300).display_account_info().yield_interest()
print(ivan.account_balance)

willie.deposit(200).deposit(200).withdraw(100).withdraw(300).withdraw(50).withdraw(350).display_account_info().yield_interest()
print(willie.account_balance)