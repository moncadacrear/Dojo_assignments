# #1
# def a():
#     return 5
# print(a())
# #  should return 5

# #2
# def a():
#     return 5
# print(a()+a())
# # my prediction 10

# #3
# def a():
#     return 5
#     return 10
# print(a())
# # my prediction is the return of 5


# #4
# def a():
#     return 5
#     print(10)
# print(a())
# # my prediction 5 


# #5
# def a():
#     print(5)
# x = a()
# print(x)
# my prediction 5 but it doesnt return anything 


#6
# def a(b,c):
#     print(b+c)
# print(a(1,2) + a(2,3))
# my prediction it will add both integers 3 + 5 = the print would be 8 



# #7
# def a(b,c):
#     return str(b)+str(c)
# print(a(2,5))

# my prediction "25" as a string


# #8
# def a():
#     b = 100
#     print(b)
#     if b < 10:
#         return 5
#     else:
#         return 10
#     return 7
# print(a())
# my prediction is 100 and 10




#9
# def a(b,c):
#     if b<c:
#         return 7
#     else:
#         return 14
#     return 3
# print(a(2,3)) #this will return 7
# print(a(5,3)) #this will return 14
# print(a(2,3) + a(5,3)) #this will change to print(7 + 14) and the will print 21



#10
# def a(b,c):
#     return b+c
#     return 10
# print(a(3,5))
# this will print out 8 
  

# # 11
# b = 500
# print(b)
# def a():
#     b = 500
#     print(b)

# print(b) 
# a() 
# print(b) 
# my prediction is check and line 91 output 500 ... line 96 is ouput is 500 , line 97 output is 500 , line 98 output 500  .....

# 12
# b = 500 
# print(b)
# def a ():
#     b =300
#     print(b)
#     return b
# print(b)
# a()
# print(b)
# my prediction...... line 103 output 500 , line 108 ouutput 500 , line 109 ouput 300 no return it wasnt stored into a variable we called it but we didnt stored it , line 110 output 500 


# 13
# b = 500
# print (b)
# def a():
#     b = 300
#     print(b)
#     return b
# print(b)
# b = a()
# print (b)

# my prediction....... line 116 ouput 500 , line 121 ouput 500, 
# line 122 we're storing the value of b which is the return statement of a() which is 300 and ouput 300 from the print statment
# line 123 is output is 300 because b was storing that value that it got from the return 



# 14
# def a():
#     print(1)
#     b()
#     print(2)
# def b():
#     print(3)

# a()

# my prediction from line 139 output 1,2,3



# #15

# def a():
#     print (1)
#     x = b()
#     print(x)
#     return 10
# def b ():
#     print(3)
#     return 5
# y = a()
# print(y)

# my prediction line 155 we're storing the value from the function we call upon
# on line 156 the output 1,3,5,10