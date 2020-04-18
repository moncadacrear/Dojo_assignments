# 1 biggie size

# def a(list):
#     y = list[0]
#     for x in range(0, len(list), 1):
#         if( y < list[x]):
#             print(x)
#             list[x] = "big"
#     return list
# print(a([-1,3,5,-5])) 



# 2 count positives
# def a (list):
#     count = 0 
#     for x in range(1, len(list), 1):
#         if (list[0] <= list[x]):
#             count = count + 1
#             list[len(list) - 1] = count
#     return list
# print (a([-1,1,1,1]))
# print(a([1,6,-4,-2,-7,-2])) 




# 3 sum total
# def a(list):
#     sum = 0 
#     for x in range(0,len(list)):
#         sum = sum + list[x]
#     return sum
# print(a([1,2,3,4]))
# print(a([6,3,-2]))





# 4 average 
# def a(list):
#     sum = 0 
#     for x in range(0, len(list)):
#         sum = sum + list[x]
#     return sum /len(list)
# print(a([1,2,3,4]))



# # 5 length 
# def a(list):
#     return len(list)
# print(a([37,2,1,-9]))
# print (a([]))





# 6 minium
# def a(list):
#     min = list[0]
#     for x in range(0,len(list)):
#         if (min > list[x]):
#             min = list[x]
#     return min
# print (a([-9,2,1,37]))



# 7 maxnimum

# def a(list):
#     max = list[0]
#     for x in range(0,len(list)):
#         if (max < list[x]):
#             max = list[x]
#     return max
# print (a([-9,2,1,37]))
# print(a([]))







# 8
# def a(list):
#     sum = 0
#     min = list[0]
#     max = list[0]
#     for x in range(0, len(list)):
#         sum = sum + list[x]
#         if( min > list[x]):
#             min = list[x]
#         if (max < list[x]):
#             max = list[x]
#     avg = sum /len(list)
#     return [sum , avg , min , max,len(list)]

# print(a([37,2,1,-9]))
        

# 9 Reverse list
# def a(list):
#     list.reverse()
#     return list 
# print(a([37,2,1,-9]))


        

