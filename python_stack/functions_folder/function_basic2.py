# 1 count down starting from 0
# def a():
#     for x in range (5,0,-1):
#         print(x)
# print(a())



# 2 print and Return 
# def a():
#     print(1)
#     return 2

# y =a()
# print(y)

# 3 first plus length
# # x = [1,2,3,4,5] this could be use to get the same results 
# def a(list):
#     # x = len(list) this could be use to get the same results 
#     return len(list) + list[0]
#     # return x + list[0] this could be use as well 
# print(a([1,2,3,4,5]))



# 4 values greater than second 

# def a(my_list):
#     count = 0 
#     empty_list = []
#     for i in range(0,len(my_list)):
#         if (my_list[1] < my_list[i]):
#             empty_list.append(my_list[i])
#             count = count + 1
#     return count , empty_list
                    
# print(a([5,2,3,2,1,4]))



# 5 this length, that value
# def a (y,x):
#     list = []
#     for i in range ( 0, y, 1):
#         if ( y > i):
#             list.append(x)
#     return list
# print (a(4,7))
# print (a(6,2))



