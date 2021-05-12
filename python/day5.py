"""
Outline:
1. Basic Data Structures (Dict continuation)
2. Function
"""

# Dictionary continuation

mydict = {'mylist1': [1, 4, 5], 'num1': 1000}

# pop -> removes a key with its value
mydict.pop('num1')
print(mydict)

# popitem -> removes the last key-value pair
mydict.popitem()
print(mydict)


# Functions -> prevent any repeats, provide abstractions, modularizes code

# DRY -> Don't Repeat Yourself
# Abstraction -> hides the actual code, i.e. just use its functionality
# Modularize -> splits your code into several parts, each doing its function

# Built-in functions
print('asdfasdf')
len([1, 2, 3])
range()
open()

# Define new functions
# NOTE: Make sure the function names are readable and straight-forward


# Without arguments
def say_hello_world():
    print('Hello World!')


# Call / invoke functions
say_hello_world()


# With arguments
def say_hello_world_many_times(times):
    for i in range(times):
        say_hello_world()


say_hello_world_many_times(7)
say_hello_world_many_times(times=7)


# With default arguments
def say_hi(times=3):
    for i in range(times):
        print('Hi!')


say_hi(1)
say_hi()
say_hi(times=2)


# Multiple arguments
def say_two_things(word1, word2):
    print(word1 + word2)


say_two_things('Hi', 'there')


# NOTE: Place default arguments in the end of the function def
def somef(w1, w2, w3='1', w4='2'):
    print(w1+w2+w3+w4)


somef(w2='hi', w1='hii', w4='yo')   # With some rearrangements


# pass -> to prevent errors caused by empty functions
def count_weirdness(num):
    pass


# return statement -> usually to store values for later use
#                  -> similar with break, but for functions
def compute_total(ls):
    total = 0
    for x in ls:
        total += x
    return total


mylist = [1, 2, 3, 4, 5, 6]
mylist_total = compute_total(mylist)
print(mylist_total)


"""
Bubble Sort Pseudocode:
1. Create a copy of the list
2. For i from 0 to n - 1, 
    a. If the ith element is greater than the
       (i + 1)th element, swap them.
3. Repeat step 2 until the list is sorted.
4. If done, return the sorted list.

Task: Complete the bubble_sort function.
"""


def bubble_sort(ls):
    sorted_list = ls.copy()
    n = len(ls)
    for i in range(n - 1):
        print(i, i + 1)
        if i > i + 1:
            print('Swap')


ls = [5, 2, 3, 9, -1, 4]
bubble_sort(ls)


"""
Task: Create a function where given a list, return its standard deviation.
Tips: Modularize your code into several functions, each with their own purpose.

Reference: https://www.mathsisfun.com/data/standard-deviation.html 
           https://en.wikipedia.org/wiki/Standard_deviation#Population_standard_deviation_of_grades_of_eight_students
"""