s = "oneTwoThree"

# Since first word is always counted, started counting from 1
wordCount = 1

for i in range(len(s)):
    if s[i] == s[i].upper():
        wordCount += 1

print wordCount