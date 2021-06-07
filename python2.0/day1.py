print("5")

"""
Basic Data Types:
1. int - integers (e.g. -5, 100, 0)
2. float - floating point/decimal numbers (e.g. 4.7, -9.8)
3. string - consist of characters/letters (e.g. "Hello World", 'a', '')
4. boolean - truth values (True, False)
"""

print(True)

"""
Arithmetic Expressions (int and float):
- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (/)
- Floor Division (//)
- Power (**)
- Modulo (%)
"""

print(7 + 9)
print(8 - 2.2)
print(2 * 3)
print(9 / 2)
print(-1 // 2)
print(3 ** 3)
print(21 % 8)

print((2 + 5) * 3)

"""
String Operations:
- Concatenate (+)
- Repeat (*)
"""

print("Hello" + "World" + "Python")
print("Hello" * 100)
print("Hello" * 2 + "Bob")

"""
Variables - somewhat like a storage box

Syntax: variablename = value

Instantiate variable = make/create a variable

Rules for naming variables:
1. Starts with alphabets or _ 
    valid: mynum, myNum, MYNUM
    invalid: 5num, &num
2. Make it as descriptive as possible
3. Case sensitive
4. No spaces in variables
    valid: phoneNumber, phone_number, PhoneNumber
    invalid: phone number
"""

mynum = 1000
print(mynum)
mynum = 100
print(mynum)

num1 = 10
num2 = 100
print(num1 + num2)

num1 = 10
num2 = num1 + 1
print(num1)
print(num2)

mystr1 = "Hello"
mystr2 = "Bob"
print(mystr1 + " " + mystr2)

mystr1 = "Hello"
mystr2 = mystr1 + " " + "Bob"
print(mystr2)

# Multiple Assignments

a = 10
b = 20
c = 30
d = 40
print(a, b, c, d)

a, b, c, d = 10, 20, 30, 40
print(a, b, c, d)

# Input (NOTE: input() returns a string value)

userInput = input("Input a number: ")
print(userInput)

# Type
print(type(15.7))   # float
print(type("Hello"))    # str

"""
Type casting - convert from one data type to another

str(), int(), float(), bool()
"""
userInput = int(input("Input a number: "))
print(userInput * 5)
print(userInput * -1)

print(int(1.7))  # 1
print(int(-1.7))    # -1

"""
Comments (#) and Docstring ("""""" or '''''')
- Document and explaining your code

When to use:
Comments - inline/short sentences
Docstring - multiline

Don't comment everything
"""
