# Exercise 3
# The prime factors of 13195 are 5, 7, 13 and 29.
# What is the largest prime factor of the number 600851475143 ?

prime_factor = []

userNumber = int(raw_input("What's your number? "))
for i in range (2, userNumber):
    if (userNumber % i == 0):
        prime_factor.append(i)
        userNumber = userNumber / i 
        i = 2
print prime_factor