"""
Outline:
1. Recursive Functions
2. Introduction to Algorithms
    a. Searching
    b. Sorting
"""

# Recursive Functions -> a function that calls itself.

# MUST HAVE:
# 1. Base Case -> to terminate further recursion calls.
# 2. Recursive Step -> call the function itself again.


def factorial(n):
    # Base Case
    if n == 0:
        return 1

    # Recursive Step
    return n * factorial(n - 1)

print(factorial(3))


"""
Task: Implement Fibonacci Sequence using recursion.

Example: fibonacci(4) = 3
         fibonacci(8) = 21
"""


# Algorithm -> a set of instructions that are unambiguous, executed in finite time.
# Pseudocode -> an algorithm that is explained using human language (not specific to any programming language).

# Searching Algorithm - Linear, Binary

"""
Pseudocode for Linear Search: (finding k)
1. i from 0 to len(ls) - 1
    a. If the ith element = k, return i and done.
2. If not found, return -1 and done.
"""

"""
Task: Implement Linear Search
"""


"""
Pseudocode for Binary Search (given that the list is sorted):
1. Let l = 0 and r = len(ls) - 1
2. m = (l + r) // 2
3. If l > r, return -1 and done (not found)
4. If ls[m] == k, return m and done (found)
5. Else if ls[m] < k, search the right side (l = m + 1 and go to step 2)
6. Else, search the left side (r = m - 1 and go to step 2)
"""

# Implementation of Binary Search
def bin_search(ls, key, l, r):
    # Base Case
    if l > r:
        print("NOT FOUND")
        return -1

    m = (l + r) // 2
    if ls[m] == key:
        print("FOUND")
        return m

    # Recursive Step
    elif ls[m] < key:
        # Search the right side of the list
        return bin_search(ls, key, m + 1, r)
    else:
        # Search the left side of the list
        return bin_search(ls, key, l, m - 1)
        
print(bin_search([-2, 5, 7, 10, 20, 30], 6, 0, 5))


# Sorting Algorithm - Bubble, Insertion, Merge

"""
Pseudocode for Insertion Sort:
1. i from 0 to len(ls) - 1
    a. Find the minimum element in the list from i to len(ls) - 1.
    b. Swap the minimum element with element at index position i.
"""

def insertion_sort(ls):
    s_ls = ls.copy()
    for i in range(len(s_ls)):
        min_value = s_ls[len(s_ls) - 1]
        min_index = len(s_ls) - 1
        for j in range(i, len(s_ls)):
            if s_ls[j] < min_value:
                min_value = s_ls[j]
                min_index = j
        s_ls[i], s_ls[min_index] = s_ls[min_index], s_ls[i]
    return s_ls

ls = [5, 10, -1, 10, 7]
print(insertion_sort(ls))


"""
Pseudocode for Merge Sort:
1. If len(ls) <= 1, it is sorted and done
2. Sort the left half of the list, back to 1
3. Sort the right half of the list, back to 1
4. Combine the sorted left and the right half
5. Return the full sorted array
"""

"""
Task: Implement Merge Sort.
"""