"""
Outline:
1. Stack
2. Queue
3. Deque
4. Priority Queue
5. Lambda function
6. Map, filter, reduce
"""


"""
Stack - LIFO (Last In First Out) data structure

Operations:
1. Push - insert
2. Pop - remove
3. Top/peek - check value

Use cases:
1. Browsing different links
2. Undo
3. Graph traversal (DFS)
"""

# Implement using list
st = []
st.append(10)   # push
st.append(100)  # push

st.pop()

st.append(1000)

print(st)

class Stack:
    def __init__(self):
        self.stack = []

    def push(self, val):
        self.stack.append(val)

    def pop(self):
        self.stack.pop()
    
    def top(self):
        return self.stack[-1]

st2 = Stack()
st2.push(100)
st2.push(1000)
st2.pop()
print(st2.top())


"""
Queue - FIFO (First In First Out) data structure

Operations: 
1. Enqueue - insert
2. Dequeue - remove
3. Front - front value
4. Back - back value

Use cases:
1. Computer operations
2. Graph traversal (BFS)
"""

from queue import Queue

q = Queue()
q.put(100)
q.put(1000)
print(q.get())
print(q.get())


"""
Deque - double-ended queue

Operations:
1. Push left/right
2. Pop left/right
3. Peek left/right
"""

from collections import deque

dq = deque()

dq.appendleft(1)
dq.appendleft(2)
dq.append(10)
dq.append(100)

print(dq)

print(dq.popleft())
print(dq.pop())
print(dq)


"""
Priority Queue - queue that is based on priorities

Operations:
1. Enqueue
2. Dequeue
3. Front

Use cases:
1. Handling multiple computer operations
2. Shortest path algorithm
"""

from queue import PriorityQueue

pq = PriorityQueue()
pq.put((3, "student"))
pq.put((1, "healthcare workers"))
pq.put((2, "elderly"))

print(pq.get())
pq.put((1, 'healthcare workers'))
print(pq.get())
print(pq.get())


"""
Lambda function - anonymous function

Use cases: implementing short or single use functions
"""

# def multiply_by_two(num):
#     return num * 2

multiply_by_two = lambda num: num * 2
print(multiply_by_two)
print(multiply_by_two(5))

# def add_two_numbers(x, y):
#     return x + y

add_two_numbers = lambda x, y: x + y
print(add_two_numbers(5, 10))


"""
Map - apply a function to every item, results in a iterable
Filter - keep items that makes a function true
Reduce - apply a function to every item, results in a single entity
"""
# MAP
ls = (1, 2, 3, 4, 5)

# Define regular function
def mul_3(num):
    return num * 3

print(tuple(map(mul_3, ls)))    # Does not modify original contents

# Lambda function
print(tuple(map(lambda x: x * 3, ls)))


# FILTER
# Regular function
def is_odd(num):
    return num % 2 != 0

print(tuple(filter(is_odd, ls)))

# Lambda function
print(tuple(filter(lambda num: num % 2 != 0 and num % 5 != 0, ls)))


# REDUCE
from functools import reduce

ls = [1, 2, 3, 4, 5]

print(reduce(lambda x, y: x + 2 * y, ls))