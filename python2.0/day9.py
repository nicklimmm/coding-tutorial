"""
Other Data Structures:
- Stack -> LIFO (Last In First Out)
    e.g. Undo, Redo, Stack of books/dishes
    Operations:
        - Push -> insert
        - Pop -> remove
        - Top/peek -> check top value
- Queue -> FIFO (First In First Out)
    e.g. Computer resources
    Operations:
        - Enqueue -> insert
        - Dequeue -> remove
        - Front -> check front value
        - Back -> check back value
- Deque -> Double-ended queue
    Operations:
        - Left/right push/enqueue -> insert
        - ...
- Priority Queue -> Queue with priority
    e.g. Priority vaccinations
"""

# Deque
from collections import deque

dq = deque()

dq.append(1)
dq.append(2)
dq.appendleft(3)
print(dq)

dq.popleft()
dq.pop()
print(dq)

# Priority Queue
from queue import PriorityQueue

pq = PriorityQueue()
pq.put((10, "John"))
pq.put((1, "Dave"))
pq.put((3, "Alice"))

print(pq.get())
print(pq.get())


"""
Higher Order Functions -> functions that either accepts a function as its arguments or returns a function

Use cases: decorators, function factory, authentication, time logger
"""


def say_hello():
    print("My message:")
    print("hello!")


def repeat_function(func, n):
    for i in range(n):
        func()


def stop_then_repeat(func, n):
    def repeated_function():
        for i in range(n):
            func()

    return repeated_function

# repeat_function(say_hello, 3)


func_2 = stop_then_repeat(say_hello, 2)
func_3 = stop_then_repeat(say_hello, 3)

func_2()
func_3()

# Time logger
from datetime import datetime

def time_logger(func):
    def func_with_time_logger():
        t1 = datetime.now()
        func()
        t2 = datetime.now()
        print(t2 - t1)

    return func_with_time_logger


def long_function():
    print("Starting now!")
    for i in range(100000000):
        pass

time_logger(long_function)()


"""
Map - returns a list where each item is applied by a function
Filter - returns a filtered list where it satisfies a condition
Reduce - returns a single entity, with accumulation
"""

def double(num):
    return num * 2

def is_even(num):
    return num % 2 == 0

def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

ls = [1, 2, 3, 4]
print(list(map(double, ls)))
print(list(filter(is_even, ls)))

from functools import reduce

print(reduce(add, ls))
print(reduce(subtract, ls))


"""
Lambda function -> anonymous function
                -> useful for implementing short functions, along with map, filter, and reduce

Syntax: lambda *args*: *return value* 
"""
add = lambda x, y: x + y
print(add(1, 2))

ls = [1, 2, 3, 4, 5, 6]
print(list(filter(lambda x: x % 3 == 0, ls)))

"""
Mini-task: (Use map, filter, reduce, lambda functions)

Given a random 2D array of numbers, sum the inner list first, then remove the sums that are divisible by 2, then sum them up
e.g. [[1, 2, 3], [1, 2], [3, 4]] -> [6, 3, 7] -> [3, 7] -> 10
     [[1, 2]] -> [3] -> [] -> 0
"""

arr = [[1, 2, 3], [1, 2], [3, 4]]
