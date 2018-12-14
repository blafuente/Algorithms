# Exercise 3
# The prime factors of 13195 are 5, 7, 13 and 29.
# What is the largest prime factor of the number 600851475143 ?

# prime_factor = []

# userNumber = int(raw_input("Enter a number: "))
# for i in range (2, userNumber):
#    if (userNumber % i == 0):
#         prime_factor.append(i)
#         userNumber = userNumber / i 
#         i = 2
# print prime_factor

# 2 and 3 are ALWAYS PRIME
known_primes = [2,3]
# A function that will find if a number is prime
def is_prime(n):
    total_known_primes = len(known_primes)
    for i in range(0,total_known_primes):
        if(n % known_primes[i] == 0 ):
            # This is divisible by a prime number.
            # It cannot be prime. 
            return False
        else:
            # It's no divisible by this one... BUT DOESN'T MEAN
            # it's not prime. Its just not divisble by this number
            continue
# We went through ALL known primes, and never hit our return False...
# which means, this wasn't divisible by any known prime,
# so it must be prime append
known_primes.append()
if (i == total_known_primes):
    return True
