"""
Algorithms - a set of instructions that are unambiguous, executed in finite time

Pseudocode - an algorithm that is explained using the help of human language (not specific to any programming languages)
"""

"""
Linear Search - search linearly for value 'target' in array 'arr'

Pseudocode:
found = -1
Iterate from i = 0 -> length of 'arr' - 1:
    if arr[i] == target:
        found = i
        break

Mini-Task: Create a linear search program
"""

"""
Bubble Sort

Pseudocode:
While True:
    there_is_swap = False
    Iterate from i = 0 -> length of 'arr' - 2:
        if arr[i] > arr[i + 1]:
            swap arr[i] and arr[i + 1]
            there_is_swap = True
    if not there_is_swap:
        break
"""
arr = [9, 5, 7, 6, 3]
while True:
    there_is_swap = False
    for i in range(len(arr) - 1):
        if arr[i] > arr[i + 1]:
            arr[i], arr[i + 1] = arr[i + 1], arr[i]
            there_is_swap = True
    if not there_is_swap:
        break

print(arr)

"""
Recursive Functions - a function that calls itself in the function definition

Recursive functions need 2 parts:
1. Base case (simplest case)
2. Recursive step (calling the function itself)
"""

"""
Factorials (n!)

e.g. 5! = 5 * 4! = 5 * 4 * 3! = ... = 5 * 4 * 3 * 2 * 1
     n! = n * (n - 1)!
     0! = 1
"""


def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)


print(factorial(3))

"""
Binary Search - search by halves for value 'target' in sorted array 'arr'

Pseudocode:

function binary_search(arr, target):
    --- Base Case ---
    if arr is empty:
        return False

    --- Recursive Step ---
    mid_index = len(arr) // 2
    if arr[mid_index] == target:
        return True
    elif arr[mid_index] < target:
        return binary_search(right half of arr, target)
    elif arr[mid_index] > target:
        return binary_search(left half of arr, target)
"""


def binary_search(arr, target):
    if len(arr) == 0:
        return False
    mid_index = len(arr) // 2
    if arr[mid_index] == target:
        return True
    elif arr[mid_index] < target:
        return binary_search(arr[mid_index + 1:], target)
    elif arr[mid_index] > target:
        return binary_search(arr[:mid_index], target)


arr = [-100, 20, 70, 90, 95, 100]
print(binary_search(arr, 95))


def binary_search_iter(arr, target):
    l = 0
    r = len(arr) - 1
    while l <= r:
        m = (l + r) // 2
        if arr[m] == target:
            return m
        elif arr[m] < target:
            l = m + 1
        elif arr[m] > target:
            r = m - 1
    return -1


arr = [-100, 20, 70, 90, 95, 100]
print(binary_search_iter(arr, 1000))
