#   String: Is Palindrome
#   Create a function that returns a boolean whether the string is a strict palindrome. 
#     - palindrome = string that is same forwards and backwards

#   Input: "a x a"
#   Output: true
#   Input: "racecar"
#   Output: true
#   Input: "Dud"
#   Output: false
#   Input: "oho!"
#   Output: false

#   Do not ignore spaces, punctuation and capitalization

def isPal(astring):
    # Will return True for a strict palindrome, false otherwise
    return astring == astring[::-1]

print(isPal("Dud"))

#   Longest Palindrome
#   For this challenge, we will look not only at the entire string provided, but also at the substrings within it. 
#   Return the longest palindromic substring. 

#   Input: "what up, daddy-o?"
#   Output: "dad"
#   Input: "uh, not much"
#   Output: "u"

#   Input: "Yikes! my favorite racecar erupted!"
#   Output: "e racecar e"
#   Strings longer or shorter than complete words are OK.
#   All the substrings of "abc" are:
#   a, ab, abc, b, bc, c

def longestPalindrome(astring):
    # corner cases:

    if type(astring) != str or astring == "":
        return False

    if len(astring) == 1:
        return astring[0]

    if isPalindrome(astring):
        return astring

    longest = astring[0]
    
    for i in range(len(astring)-1):
        temp = astring[i]
        
        for j in range(i+1,len(astring)):
            temp += astring[j]
        
            if isPalindrome(temp) and len(temp) > len(longest):
                longest = temp

    return longest

print(longestPalindrome("e racecar e"))


import unittest

class isPalindromeTests(unittest.TestCase):
    # Tests for isPalindrome
    def testOne(self):
        return self.assertEqual(isPalindrome("a x a"), True)
    def testTwo(self):
        return self.assertEqual(isPalindrome("racecar"), True)
    def testThree(self):
        return self.assertEqual(isPalindrome("Dud!"), False)
    def testFour(self):
        return self.assertEqual(isPalindrome("oho!"), False)




    # Tests for longestPalindrome()
    def testFive(self):
        return self.assertEqual(longestPalindrome("e racecar e"), "e racecar e")
    def testSix(self):
        return self.assertEqual(longestPalindrome("what up, daddy-o?"), "dad")
    def testSeven(self):
        return self.assertEqual(longestPalindrome("uh, not much"), "u")       
    # corner cases
    def testEight(self):
        return self.assertEqual(longestPalindrome(["r","a","c","e","c","a","r"]), False) 
    def testNine(self):
        return self.assertEqual(longestPalindrome("b"), "b") 
    def testTen(self):
        return self.assertEqual(longestPalindrome(""),False)
    def testEleven(self):
        return self.assertEqual(longestPalindrome("ablewasiereisawelba"), "ablewasiereisawelba")       


    def setUp(self):
        # print("Running setup tasks")
        pass
    
    def tearDown(self):
        # print("Running teardown tasks")
        pass

if __name__ == "__main__":
    unittest.main()
