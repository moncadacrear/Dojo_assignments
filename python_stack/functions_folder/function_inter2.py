# 1 update values in dictionaries and lists
# x = [ [5,2,3], [10,8,9] ] 
# students = [
#      {'first_name':  'Michael', 'last_name' : 'Jordan'},
#      {'first_name' : 'John', 'last_name' : 'Rosales'}
# ]
# sports_directory = {
#     'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
#     'soccer' : ['Messi', 'Ronaldo', 'Rooney']
# }
# z = [ {'x': 10, 'y': 20} ]



# x[1][0] = 15
# print(x)

# students[0]['last_name'] = "Bryant"
# print(students)

# sports_directory ["soccer"][0] = "Andres"
# print (sports_directory)

# z[0]["x"] = 20

# print(z)


# 2 Iterate Through a List of Dictionaries

# students = [
#         {'first_name':  'Michael', 'last_name' : 'Jordan'},
#         {'first_name' : 'John', 'last_name' : 'Rosales'},
#         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#         {'first_name' : 'KB', 'last_name' : 'Tonel'}
#     ]
# def iterateDictionary(students):
#     for index in range(len(students)):
#         print(students[index])
# print(iterateDictionary(students))




# 3 Get valus from a list of Dictionaries
# students = [{'first_name':  'Michael', 'last_name' : 'Jordan'},
#         {'first_name' : 'John', 'last_name' : 'Rosales'},
#         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#         {'first_name' : 'KB', 'last_name' : 'Tonel'}
# ]


# # def iterateDictionary2(students):
# #     for i in range(0, len(students)):
# #             print(students[i]["first_name"])
# # print(iterateDictionary2(students))

# def iterateDictionary2(students):
#     for i in range(0, len(students)):
#             print(students[i]["last_name"])
# print(iterateDictionary2(students))


dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}



def printInfo(some_dict):
    for i in range(0, len(some_dict["locations"])):
        print(some_dict["locations"][i])
    

print(printInfo(dojo))


# printInfo(dojo)
# # output:
# 7 LOCATIONS
# San Jose
# Seattle
# Dallas
# Chicago
# Tulsa
# DC
# Burbank
    
# 8 INSTRUCTORS
# Michael
# Amy
# Eduardo
# Josh
# Graham
# Patrick
# Minh
# Devon






