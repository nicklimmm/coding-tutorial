"""
Outline:
1. Basic Data Structures (Lists, Tuples, Sets, Dictionaries)
"""

# Data Structures -> a way to store data, for efficiency and simplicity reasons.

# Immutable -> contents cannot be altered after initialization.
# Mutable -> contents can be altered after initialization.


# List -> mutable data structure
mylist = [10, 20, 30, 40, 50, 60]
print(mylist)

# Iterate through the whole list
for element in mylist:
    print(element)

# Iterate by indexing
for i in range(len(mylist)):
    print(mylist[i])

# Indexing (0-indexing, i.e. starts from 0)
print(mylist[2]) # 3rd element
print(mylist[-1]) # 1st element from the back

# Slicing
print(mylist[1:4]) # 2nd to 4th element
print(mylist[:5:2]) # 1st, 3rd and 5th element
print(mylist[2:]) # 3rd until the last element

print(mylist[-4:-1]) # 4th last element until the 2nd last element
print(mylist[-2:-6:-1]) # 2nd last element until the 5th last element

# Nested List
list2 = ['John', 50, 1.5, True, ['I am a list', 2], 10]
print(list2[4][0]) # Multi-level indexing

# Mutatability of Lists
mylist = [1, 2, 3, 4, 5]
mylist[3] = 100
mylist[0:3] = [100, 101, 102, 103]
print(mylist)

# Length of Lists
mylist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(len(mylist))

# List methods

# Sort
mylist = [9, 8, 10, 6, 5] # Ascending sort
mylist.sort()
print(mylist)

mylist = [9, 8, 10, 6, 5]
mylist.sort(reverse=True) # Descending sort
print(mylist)

mylist = ['Bob', 'Dan', 'Anna'] # Sorts in lexicographical order
mylist.sort()
print(mylist)

# Append
mylist = [1, 2, 3, 4]
mylist.append(100)
print(mylist)

# Insert
mylist = [1, 2, 3, 4]
mylist.insert(2, 1000)  # (index, data)
print(mylist)

# Extend
mylist = [1, 2, 3]
mylist.extend([4, 5, 6])
print(mylist)

# Clear
mylist = [1, 2, 3, 4]
mylist.clear()
print(mylist)

# Pop (by index)
mylist = [1, 2, 3, 4]
mylist.pop(2)    # Removes last element if no argument
print(mylist)

# Remove (by value)
mylist = ['John', 'Anna', 'Dan']
mylist.remove('Anna')
print(mylist)

# Count (by value)
mylist = ['Anna', 'Anna', 'Anna', 'John', 'Anna']
print(mylist.count('Anna'))

# Index (search by value)
mylist = [2, 4, 6, 8, 10, 9, 8]
print(mylist.index(9))

# Reverse
mylist = [4, 2, 6, 5]
mylist.reverse()
print(mylist)

# Copy
mylist = [1, 2, 3, 4]
hislist = mylist
print(hislist)

hislist[0] = 10  # Changes mylist too
print(hislist)
print(mylist)

mylist = [1, 2, 3, 4]
hislist = mylist.copy()
print(hislist)

hislist[0] = 10  # Does not change mylist
print(hislist)
print(mylist)


"""
Task: Print the average of [8, 1.7, 12, 6, 4, 21, -6, -1, 8]

Ans: 5.966666666666667
"""

# Tuple -> similar to list, but immutable
mytuple = (1, 2, 3)
print(mytuple)

mytuple = (0,)
print(mytuple)

# Indexing, Slicing, Length of Tuple, Nested -> similar to lists

# Sort Tuple
mytuple = (4, 3, 5)
print(tuple(sorted(mytuple))) # Creates a new tuple, due to immutatability

# Tuple methods, count and index -> similar with lists

# Set -> mutable data structure that contains only unique elements
myset = {1, 2, 3, 4, 4, 5, 'John', 'Anna', 'John'}
print(myset)

myset = set() # Initialize empty set

# Iterate through the set
for element in myset:
    print(element)

# Sets cannot be indexed

# Set methods

# Add
myset = {1, 2, 3, 4, 4, 5, 'John', 'Anna', 'John'}
myset.add(10)
print(myset)

# Pop (removes first element)
myset = {1, 2, 3, 4, 4, 5, 'John', 'Anna', 'John'}
myset.pop()
print(myset)

# Update (similar with extend, but deals with sets)
myset = {1, 2, 3, 4, 4, 5, 'John', 'Anna', 'John'}
myset.update({-1, -2, -2, 5})
print(myset)

# Intersection
set1 = {1, 2, 3}
set2 = {2, 3, 4}
print(set1.intersection(set2))

# Union
set1 = {1, 2, 3}
set2 = {2, 3, 4}
print(set1.union(set2))

# Symmetric Difference
set1 = {1, 2, 3}
set2 = {2, 3, 4}
print(set1.symmetric_difference(set2))

# _update -> mutates the original set

# For intuition/visualization, check Venn diagram

# Remove, clear, copy, len -> similar with lists


# Dictionary -> mutable data structure that stores key-value pairs
mydict = {'Anna': '12345678', 'John': '98765432'}
print(mydict)

# Iterating through a dictionary
for x in mydict.keys():    # Only prints the keys
    print(x)

for x in mydict.values():   # Only prints the values
    print(x)

for x in mydict.items():    # Prints the key-value pair in tuples
    print(x)

for k, v in mydict.items(): # Immediately separates the key-value pair
    print('The key is', k, 'and the value is', v)
    
# Getting the value with key
print(mydict['John'])

# Mutatability of Dictionaries
mydict['Carol'] = '23456789' # Adding another key-value pair
print(mydict)

mydict['John'] = '10' # Mutate values
print(mydict)

# NOTE: The keys in the dictionary must be IMMUTABLE, values can be anything

mydict = {} # Shorthand to initialize empty dictionary