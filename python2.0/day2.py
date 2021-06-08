"""
Update operators - for updating variables

Syntax: var (op)= value

When the operation is complex, it is better to use assignment operator
"""
a = 10
a = a + 9
print(a)

# Shorthand
a = 10
a += 9
print(a)

b = 20
c = 5
b /= c
print(b)


"""
Logical Operators:
- Equal to (==)
- Not equal to (!=)
- Less than/equal (< / <=)
- Greater than/equal (> / >=)
- and, or, not

Returns a boolean value
"""

print(5 == 3)   # False

a = 10
print(a != 76)  # True

print(7 > -5)   # True

"""
and - False when there is a False
or - True when there is a True
not - negate the boolean value
"""

print(5 == 5 and 7 != 10) # True and True => True

a = 10
print(a == 11 or 9 < 20) # False or True => True

print(not 9 == 9) # not True => False

print((8 >= 10 or 6 != 6) and 6 < 3 and 8 > 10) # False


"""
Conditional statements (if, else, elif)
"""
userinput = int(input("Enter a number: "))

if userinput < 10:
    print("Your number is less than 10")
elif userinput < 5:
    print("Too small")
elif userinput >= 11 and userinput < 20:
    print("Your number is in between 11 and 19")
elif userinput >= 20:
    print("It is a big number")
else:
    print("IDK")

# Nesting
a = 5
if a < 20:
    print("a is less than 20")
    if a < 10:
        print("a is less than 10")

# Conditional block starts with an if statement

# Prints both
b = 10
if b < 20:
    print("First")
if b < 15:
    print("Second")

# Prints one
b = 10
if b < 20:
    print("First")
elif b < 15:
    print("Second")


"""
For loop - loops for a specific amount of times

Syntax:
for (variable name) in (iterator):
    ...some code
"""
# range(end) -> 0 to end - 1
for i in range(10):
    print(i + 1)

# range(start, end) -> start to end - 1
for num in range(10, 20):
    print(num)

# range(start, end, step) -> start to end - 1 with step
for i in range(-10, 8, 2):
    print(i)

for i in range(10, -7, -2):
    print(i)
    print("Hello")
    if i < 0:
        print("I am negative")

for i in range(16):
    if i % 2 == 0:
        print("I am even")
    else:
        print("I am odd")

# Result of 1 + 2 + 3 + ... + 100
result = 0
for i in range(1, 101):
    result += i

print(result)

"""
Task: Find the result of 1^2 + 3^2 + 5^2 + ...+ 99^2
                        (one squared, ...)
"""

# Iterate every letter of the string
mystr = "asdfghjkl"
for letter in mystr:
    print(letter)

# Nested for loop
for i in range(5):
    for j in range(5):
        for k in range(5):
            print(i, j, k)


"""
Task: Print how many 2 digits (0 to 9), a and b, such that a <= b
e.g. 7 and 9 (valid), 9 and 5 (invalid), 0 and 7 (valid)
"""

"""
Flow Control Statements (break, continue)

break - exit the loop
continue - continue to the next iteration
"""
for i in range(20):
    if i > 7:
        print("Stopping...")
        break
    print(i)

for i in range(10):
    if i == 0 or i == 7:
        continue
    print(i)
