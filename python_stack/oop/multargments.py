# def varargs(arg1, *args):
#     print("Got ", arg1, " and ", args)
# varargs("one") 			# output: Got one and ()
# varargs("one", "two")                # output: Got one and ('two',)
# varargs("one", "two", "three")          #output: Got one and ('two', 'three')


# def varargs(arg1, *args):
#     for a in args:
#     	print(a)
# varargs("one", "two", "three") # output: two, three (on separate lines)



class MathDojo:
    def __init__(self):
        self.result = 0
    def add(self, num, *nums):
        self.
    def subtract(self, num, *nums):
        # your code here
# create an instance:
md = MathDojo()
# to test:
x = md.add(2).add(2,5,1).subtract(3,2).result
print(x)	# should print 5
# run each of the methods a few more times and check the result!


