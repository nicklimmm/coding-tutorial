"""
Data Structures - a way to store data, for efficiency and simplicity

Types: List, Tuple, Sets, Dictionaries

Behaviours:
- Immutable -> contents cannot be modified after being created
- Mutable -> contents cannot be modified after being created
"""

# List -> mutable, ordered, 0-indexed
friends_list = ["John", "Alex", "Carl", "Edison"]
print(friends_list)

# Iterate through the whole list
for friend in friends_list:
    print("Hello " + friend)

# Access element in list (indexing)
print(friends_list[3])  # 4th item from the front
print(friends_list[-1])  # 1st item from the back

# Length of list
print(len(friends_list))

# Iterate through the whole list with range/indexing
for i in range(len(friends_list)):
    print(friends_list[i])


mylist = [10, 20, 30, 40, 50, 60, 70]

# Slicing (works similar like range)
print(mylist[1:4])
print(mylist[-4:-1])
print(mylist[1:-1])

print(mylist[2:])

# Slicing with step
print(mylist[0:5:2])    # Forwards
print(mylist[3:0:-2])  # Backwards
print(mylist[::-1])  # Reverse the whole list

# Nested List
nested_list = [
    ['John', 'Doe'],
    10,
    1.0,
    'Hello',
    [
        ["SUPER NESTED LIST"]
    ]
]
print(nested_list[0][1])    # Multi-level indexing

# Mutatability of lists
mylist = [2, 4, 6, 8]
mylist[3] = 100
print(mylist)

mylist[1:3] = [99, 999]  # Mutate a slice of the list
print(mylist)

# List methods (list operations)

# Sort
mylist = [4, 8, 3, 10, 1]
mylist.sort()   # Ascending
print(mylist)

mylist = [4, 8, 9, 10, 1]
mylist.sort(reverse=True)   # Descending
print(mylist)

friends_list = ["Bob", "Anna", "Dan"]
friends_list.sort()  # Sort in lexicographical order
print(friends_list)

# Append
mylist = [1, 2, 3, 4]
mylist.append(5)    # Adds to the back of the list
print(mylist)

# Insert
mylist = [1, 2, 4, 5]
mylist.insert(2, 3)  # (index, data)
print(mylist)

# Extend
mylist = [1, 2, 3, 4]
mylist.extend([5, 6, 7, 8])  # Adding multiple elements from the back
print(mylist)

# Clear
mylist = [1, 2, 3, 4]
mylist.clear()  # Remove all elements from the list
print(mylist)

# Pop (remove by index)
mylist = [1, 2, 3, 4, 5, 6, 7]
mylist.pop()    # Removes last element
mylist.pop(1)   # Removes 1st index
print(mylist)

# Remove (remove by value)
mylist = ["John", "Anna", "Doe", "Clara"]
mylist.remove("Anna")
print(mylist)

# Count (count number of occurences of an element)
mylist = ['Anna', 'Anna', 'Anna', 'John', 'Anna']
print(mylist.count('Anna'))

# Index (search the value's index)
mylist = ["John", "Anna", "Doe", "Clara"]
print(mylist.index("Doe"))

# Reverse
"""
NOTE: [::-1] does not mutate the list, but .reverse() mutates
"""
mylist = [1, 2, 3, 4]
mylist.reverse()
print(mylist)

# Copy
"""
NOTE: use .copy() if you only need to copy the values, else just use regular assignment operator.
        Not using .copy() will mutate the original list if you mutate the new list.
"""
mylist1 = [1, 2, 3, 4]
mylist2 = mylist1.copy()

mylist2[0] = 1000
print(mylist1, mylist2)

# Sum
mylist = [1, 2, 3, 4]
print(sum(mylist))

"""
Mini-Task: Print the average of [8, 1.7, 3, 5, -10, 45, 20]

Average -> add all the values, then divide it with the number of items
e.g. [1, 2, -1, 0] -> Average = (1 + 2 + (-1) + 0) / 4 = 0.5

Ans: 10.385714285714286

Solution: 
mylist = [8, 1.7, 3, 5, -10, 45, 20]
print(sum(mylist) / len(mylist))
"""


# Tuple - similar to list, but immutable
mytuple = (1, 2, 3, 4)
print(mytuple)

mytuple = (1,)  # To create tuple with 1 item
print(mytuple)

# Indexing, slicing, length of tuple, nested tuple - same with lists

# Sort tuple
mytuple = (4, 3, 5, 1)
# Creates a sorted list, then convert it to a tuple
print(tuple(sorted(mytuple)))

# Tuple methods, count and index - same with lists
