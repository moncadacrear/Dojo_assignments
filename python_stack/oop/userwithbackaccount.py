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
            if(self.account_balance > 0):
                print("sorry no interest")
                return self 
            else:
                self.account_balance += self.account_balance * self.intrate
                return self


# # ivan = BankAccount(.12,200 )
# # willie = BankAccount(.44,300)

# # ivan.deposit(200).deposit(200).deposit(100).withdraw(300).display_account_info().yield_interest()
# # print(ivan.account_balance)

# # willie.deposit(200).deposit(200).withdraw(100).withdraw(300).withdraw(50).withdraw(350).display_account_info().yield_interest()
# # print(willie.account_balance)






class user:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=0.02, balance=0)
    def make_deposit(self, amount):	
        self.account.deposit(amount)
        return self 
    def make_withdrawal(self , takeout):
        self.account.withdraw(takeout)
        return self
    def display_user_balance(self ,name , display):
        self.account.display_account_info = name , display
        return self 



ivan = user("ivan solis", "fakename@gamil.com")
alex = user("alex ayala" , "alex@gmail.com")
willie = user("willie smith", "will@hat.com")
ivan.make_deposit(100).make_deposit(100)
print(ivan.account.account_balance)
# ivan.make_deposit(200)
# ivan.make_deposit(100)
# ivan.make_deposit(300)
# ivan.make_withdrawal(250)
# ivan.display_user_balance(name = ivan.name , display = ivan.account_balance)
# print(ivan.account_balance)
# alex.make_deposit(300)
# alex.make_deposit(200)
# alex.make_withdrawal(100)
# alex.make_withdrawal(200)
# alex.display_user_balance(name = alex.name , display =  alex.account_balance)
# print(alex.account_balance)
# willie.make_deposit(1000)
# willie.make_withdrawal(100)
# willie.make_withdrawal(50)
# willie.make_withdrawal(300)
# willie.display_user_balance(name = willie.name , display =  willie.account_balance)
# print(willie.account_balance)
