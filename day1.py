"""
Outline:
- print()
- Basic Data Types (int, float, string, boolean)
- Basic Data Type Operations
- Variables (swapping variables)
- input()
- Type Casting
- type()
- Comments & Docstring
"""

print("Hello World!")

"""
Basic Data Types
1. int - integers, e.g. 10, 1000
2. float - floating point numbers, e.g. 10.8, -1.2
3. string - a group of characters, e.g. "John", "10.2"
4. boolean - truth values, e.g. True, False

1. Arithmetic Expressions (ints and floats)
    - Addition (+)
    - Subtraction (-)
    - Multiplication (*)
    - Division (/)
    - Floor Division (//)
    - Power (**)
    - Modulo (%)

2. String Operations
    - Concatenate (+)
    - Repetitions (*)
"""

# Addition
print(10 + 5)

# Division
print(5 / 2)

# Floor Division
print(5 // 2)

# Power
print(4 ** 0.5)

# Modulo
print(36 % 8)

# Compound Expressions
print(2.5 * (6 + 2) + 5)

# Concatenate strings
print("Anny " + "John " + "Bob")

# Repetition
print("Anny_" * 5)

# Variables
mynumber = 15
print(mynumber)

mystring = "I am happy today."
print(mystring)

"""
Rules for naming variables:
1. Starts with alphabets, _ (Cannot start with numbers and symbols other than _)
2. Make it descriptive
3. Variables are case sensitive
4. No spaces in variables
"""

# Valid variable names
_phone2 = "1234"
Name = "John"
name3 = "Anny"

# Invalid variable names
.phone = "1234"
5street = "5th Avenue"
street name = "7th Avenue"

# Operations with variables
num1 = 8
num2 = 10
print(num1 + num2)

myname = "John"
repeat = 5
print(myname * repeat)

# Assignment operator with variables
num1 = 500
num2 = num1 + 100
print(num2)

# Multiple variable assignments
# a = 10
# b = 15
# c = 20
# d = 25

a, b, c, d = 10, 15, 20, 25

# Multiple prints in single statement (separated by a space)
print(a, b, c, d)

num1 = 15
num2 = 20
print(num1, num2)

# Swapping variables
num1, num2 = num2, num1
print(num1, num2)

num3 = 25
num1, num2, num3 = num3, num1, num2
print(num1, num2, num3)

# Input

# Note: returns string
num1 = input()
num2 = input()
print(num1 + num2)

# To solve it, use type casting
"""
int() - Change to integer
float() - Change to float
str() - Change to string
"""
num1 = int(input())
num2 = int(input())
print(num1 + num2)

# Type Casting

"""
string to int - must be digits
string to float - digits or with 1 period
anything to string - valid
"""

mynum = int(input())
print(mynum)

myfloat = 8.112
print(str(myfloat) + 'John')

# type()

value = 'NAME'
print(type(value))

# Regular string
"asdf"

# Comments
# I am a comment

# Docstring
"""
asdfasdf
asdf
asdf
asdfa
sdfas
dfas
df
"""