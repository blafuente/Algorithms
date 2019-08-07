# Given a number of integers, return indices of the two numbers such
# they add up to a specific target
#You may assume that each input would have exactly one solution, 
# and you may not use the same element twice. 

num = [2, 7, 11, 15]
target = 9

for i in range(len(num)):
    for j in range((i + 1),len(num)):
        if num[j] == target - num[i]:
            print num[i], num[j]
            print i, j