name = "zen"
print ("my name is " , name)
last = 2
print( "my name is" +  name )

print("my name is " , last)


# .format

first_name = "zen"
last_name = "coder"
age =27
print(f"my name is {first_name} {last_name} and i am {age} yeats old.")


print("my name is {} {} and i am {} years old." .format(first_name, last_name, age))
print ("my name is {} {} and i am {} years old." . format(age, first_name,last_name))


# %-formatting


hw = "Hello %s" % "world" 	# with literal values
py = "I love Python %d" % 3 
print(hw, py)
# output: Hello world I love Python 3
name = "Zen"
age = 27
print("My name is %s and I'm %d" % (name, age))		# or with variables
# output: My name is Zen and I'm 27



x = 10
if x > 50:
    print("bigger than 50")
else:
    print("smaller than 50")
