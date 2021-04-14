"""
Outline: 
1. Module/library imports
2. f-string
3. Error Handling (try except statements)
4. File manipulation (txt)
"""

# Module/library imports -> to prevent implementing code that is already implemented by others.

# Docs: https://docs.python.org/3/library/random.html
import random

print(random.randint(1, 100))
print(random.choice(['duck', 'chicken', 'fish']))
print(random.choices(['duck', 'chicken', 'fish', 'beef'], k=2))


# Docs: https://docs.python.org/3/library/math.html
import math

print(5 // 2 == math.floor(5 / 2))
print(math.ceil(7 / 3))
print(math.pi)


# Docs: https://docs.python.org/3/library/datetime.html
import datetime


# f-string -> 'dynamic' strings
name = input('Enter your name: ')
age = input('Enter your age: ')

print(f'Hi {name}, you are {age} years old, welcome to my program')

num = int(input('Enter a number: '))
print(f'Your number plus 10 is {num + 10}, and your number plus 20 is {num + 20}')


# Error Handling (Try Except statements) -> prevent crashes or exceptions

# Docs: https://docs.python.org/3/library/exceptions.html
try:
    num = int(input('Enter a number: '))
    print(f'Your number is {num}')
except:
    print('Error occurred!')

print('Hello World!')

# Specific Exceptions
try:
    num1 = int(input('Enter first number: '))
    num2 = int(input('Enter second number: '))
    print(num1 / num2)
except ValueError:
    print('Error occurred! Invalid input, please enter a number.')
except ZeroDivisionError:
    print('Error occurred! Second number cannot be zero.')


# File manipulation (txt)

"""
Open modes:
1. 'r' - reading
2. 'w' - writing
3. 'a' - appending
4. 'r+' - r and w
5. 'a+' - a and r
"""

# Appending files
file = open('log.txt', 'a')
file.write('$7\n')
file.writelines(['$10\n', '$100\n'])
file.close()

# Reading files
file = open('log.txt', 'r')
print(file.readlines())

# Writing files
file = open('log.txt', 'w')
file.write('$2000\n')
file.close()

file = open('log.txt', 'r')
phone_numbers = {}
for line in file.readlines():
    name = line[:line.index('-')]
    number = line[line.index('-') + 1:line.index('\n')]
    phone_numbers[name] = number
print(phone_numbers)
file.close()

file = open('student.txt', 'r')
student_data = {}
for line in file.readlines():
    # Split a string by a string
    name, level, grade = line[:-1].split(',')
    grade = int(grade)
    student_data[name] = [level, grade]
print(student_data)
file.close()
