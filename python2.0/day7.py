"""
Module/Library -> to prevent re-implementing code that is already made by others
               -> contains functions

Python Module Index: https://docs.python.org/3/py-modindex.html
Use pip to install external modules
"""

import datetime
import math
import random

print(random.randint(10, 20))
print(random.choice(["John", "Alice", "Bob", "Dave"]))
# Choices - can select the same elements
print(random.choices(["John", "Alice", "Bob", "Dave"], k=2))
# Sample - only unique elements
print(random.sample(["John", "Alice", "Bob", "Dave"], k=2))


print(math.pi)
print(math.gcd(6, 8))
print(7 // 3 == math.floor(7 / 3))


print(datetime.date.today())


"""
f-string -> format strings ('dynamic')
         -> useful for inserting multiple variable values to string with increased readability
"""

name = "John"
age = 17
date_of_birth = "2004-08-20"

# We don't need to cast age to string
print(f'My name is {name}, my age is {age}, and I am born on {date_of_birth}')

phone_number = input("What is your phone number? ")
print(f'Your phone number is {phone_number}')

"""
Error Handling -> prevent crashes, errors, or exceptions
               -> using try except statements

Python Built-In Exceptions List: https://docs.python.org/3/library/exceptions.html
"""
try:
    num1 = int(input("Number 1: "))
    num2 = int(input("Number 2: "))
    print(num1 + num2)
# Takes any type of exceptions
except:
    print("Error occurred, try again later")

try:
    num1 = int(input("Number 1: "))
    num2 = int(input("Number 2: "))
    print(num1 / num2)
# Specific exception
except ZeroDivisionError:
    print("Number 2 cannot be zero")
except ValueError:
    print("Please input a number")
except:
    print("An error occurred")


"""
File manipulation (txt files)

Modes:
- read (r)
- write (w)
- append (a)
- read and write (r+)
- read and append (a+)
"""

# Append - adds content to the end-of-file (EOF)
file = open("log.txt", "a")
file.write('$5\n')
file.writelines(['$10\n', '$1000\n'])
file.close()

# Read
file = open("log.txt", "r")
# print(file.readlines())   # Returns value of each line in file (list)
print(file.read())  # Returns string
file.close()

# Write - overwrites the whole file
file = open("log.txt", "w")
file.write("$2000\n")
file.close()

# Scorebook


def add_scores():
    file = open("scorebook.txt", "a")
    scores = int(input("Enter number of scores to be added: "))
    for i in range(scores):
        print("---------------------")
        name = input("Enter name: ")
        lesson = input("Enter lesson name: ")
        grade = input("Enter grade: ")
        file.write(f'{name},{lesson},{grade}\n')
    file.close()


def read_scores():
    file = open("scorebook.txt", "r")
    scores_dictionary = {}
    for line in file.readlines():
        name, lesson, grade = line[:-1].split(",")
        if name not in scores_dictionary:
            scores_dictionary[name] = []
        scores_dictionary[name].append(f'{lesson} {grade}')
    file.close()
    return scores_dictionary


def query():
    name = input("Enter your search name: ")
    scores_dictionary = read_scores()
    try:
        print(scores_dictionary[name])
    except KeyError:
        print("Name not found in scorebook")


query()
