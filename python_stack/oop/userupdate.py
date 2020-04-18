class user:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0
    def make_deposit(self, amount):	
        self.account_balance += amount
        return self
    def make_withdrawal(self , takeout):
        self.account_balance -= takeout
        return self
    def display_user_balance(self ,name , display):
        self.account_balance = print(f"{name} balance:{display}")
        return self


ivan = user("ivan solis", "fakename@gamil.com")
alex = user("alex ayala" , "alex@gmail.com")
willie = user("willie smith", "will@hat.com")

ivan.make_deposit(200).make_deposit(100).make_deposit(300).make_withdrawal(250).display_user_balance(name = ivan.name , display = ivan.account_balance)
print(ivan.account_balance)
alex.make_deposit(300).make_deposit(200).make_withdrawal(100).make_withdrawal(200).display_user_balance(name = alex.name , display =  alex.account_balance)
print(alex.account_balance)
willie.make_deposit(1000).make_withdrawal(100).make_withdrawal(50).make_withdrawal(300).display_user_balance(name = willie.name , display =  willie.account_balance)
print(willie.account_balance)






