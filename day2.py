"""
Outline:
1. Update operators (+=, -=, ...)
2. Logical Operators (==, !=, and, or, not, ...)
3. Conditional Statements (if, else, elif)
4. for loop
5. Control flow statements (break, continue, pass)
"""

# Update operators
a = 5

# Equivalent to a = a + 2
a += 2

# Equivalent to a = a ** 2
a **= 2


# Logical Operators
mynum = 17

print(mynum == 20)
print(mynum != 20)
print(mynum < 20)
print(mynum > 20)
print(mynum <= 20)
print(mynum >= 20)

# Compound logical operators
print(mynum > 10 and mynum < 20)
print(mynum < 10 or mynum > 20)


# Conditional Statements
if mynum % 2 == 0:
    print('Even')
elif mynum % 3 == 0:
    print('Divisible by 3')
else:
    print('Not Even')

if mynum % 2 == 0:
    print('Divisible by 2')
if mynum % 4 == 0:
    print('Divisible by 4')

# Nested Conditional Statements
if mynum % 2 == 0:
    print('EVEN')
    if mynum == 20:
        print('Jackpot!')
    else:
        print('Good luck next time')
else:
    print('ODD')


# for loop
for i in range(10):
    print(i)
    print('Hello World!')

for i in range(5, 12):
    print(i)

for i in range(10, -1, -3):
    print(i)

for i in range(10):
    print(i)
    if i % 2 == 0:
        print('I am even')
    else:
        print('I am odd')

for i in range(20):
    if not (i % 2 == 0 or i % 5 == 0):
        print(i)

# Sum of first 100 natural numbers
total = 0
for x in range(1, 101):
    total += x
print(total)

"""
Task: find the sum of 1^2 + 3^2 + 5^2 + ... + 99^2

Ans: 166650
"""

# Print every letter of the string
mystr = 'asdfghjkl'
for letter in mystr:
    print(letter)

# Nested for loops
for i in range(5):
    for j in range(5):
        if i != j:
            print(i, j)


"""
Task: print 3 digits a, b, and c, where a <= b <= c (increasing sequence)
"""

# Control Flow Statements

# break
for i in range(1, 50):
    if i % 24 == 0:
        break
    print(i)


# continue
for i in range(1, 20):
    print('WOO')
    if i % 10 == 0:
        continue
    print(i)

# pass
for i in range(1, 15):
    if i % 5 == 0:
        pass
    print(i)

"""
Task: find the sum of all numbers from 1 to 100000 that is divisible by 17 or not divisible by 13

Ans: 4638040924
"""