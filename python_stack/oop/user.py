



class user:		
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0
    def make_deposit(self, amount):	
        self.account_balance += amount
    def make_withdrawal(self , takeout):
        self. account_balance -= takeout
    def display_user_balance(self ,name , display):
        self.account_balance = name , display



ivan = user("ivan solis", "fakename@gamil.com")
alex = user("alex ayala" , "alex@gmail.com")
willie = user("willie smith", "will@hat.com")

ivan.make_deposit(200)
ivan.make_deposit(100)
ivan.make_deposit(300)
ivan.make_withdrawal(250)
ivan.display_user_balance(name = ivan.name , display = ivan.account_balance)
print(ivan.account_balance)
alex.make_deposit(300)
alex.make_deposit(200)
alex.make_withdrawal(100)
alex.make_withdrawal(200)
alex.display_user_balance(name = alex.name , display =  alex.account_balance)
print(alex.account_balance)
willie.make_deposit(1000)
willie.make_withdrawal(100)
willie.make_withdrawal(50)
willie.make_withdrawal(300)
willie.display_user_balance(name = willie.name , display =  willie.account_balance)
print(willie.account_balance)
