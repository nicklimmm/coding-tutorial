"""
Set - unordered, does not contain duplicates (unique values only), mutable

NOTE: Sets cannot be indexed
"""
myset = {1, 2, 3, 4, 4, 4}  # removes any duplicates
print(myset)

# If creating empty sets with {}, it will create a dictionary instead
empty = set()
print(type(empty))

# Iterating the whole set
myset = {1, 2, 3, 4}
for element in myset:
    print(element)

# Set methods

# Add
myset = {1, 2, 3}
myset.add(4)
myset.add(1)
print(myset)

# Pop (removes an element randomly)
myset = {"John", "Mark", "Dave"}
myset.pop()
print(myset)

# Update (similar with extend, but for sets)
myset1 = {1, 2, 3}
myset2 = {2, 3, 4, 5}
myset1.update(myset2)
print(myset1)

# Intersection (find elements that contain in both sets, but does not modify the original set)
myset1 = {1, 2, 3}
myset2 = {2, 3, 4, 5}
print(myset1.intersection(myset2))

# Union (combine 2 sets into one, but does not modify the original set)
myset1 = {1, 2, 3}
myset2 = {2, 3, 4, 5}
print(myset1.union(myset2))
print(myset1)

# Symmetric Difference (elements that only belongs to a set, but does not modify the original set)
myset1 = {1, 2, 3}
myset2 = {2, 3, 4, 5}
print(myset1.symmetric_difference(myset2))

# We can do set operations with update -> just add '_update' after the method name

# Intersection Update (intersection, but with update)
myset1 = {1, 2, 3}
myset2 = {2, 3, 4, 5}
myset1.intersection_update(myset2)  # Return None (only updates the set)
print(myset1)

# remove, clear, copy, len -> similar with lists


"""
Dictionary - unordered, mutable, stores key-value pairs

Item syntax - key: value
"""
contacts = {"Anny": "12345678", "John": "87654321", "Paul": "10293847"}
print(contacts)

# Iterate the keys
for key in contacts.keys():
    print(key)

# Iterate the values
for value in contacts.values():
    print(value)

# Iterate both keys and values
for key, value in contacts.items():
    print(key + "'s number is: " + value)

# Search value with key
contacts = {"Anny": "12345678", "John": "87654321", "Paul": "10293847"}
print(contacts["Paul"])

# Modify values
contacts["Anny"] = "00000000"
print(contacts)

# Add a key-value pair
contacts["Bob"] = "99999999"
print(contacts)

# Delete a key-value pair
del contacts["Paul"]
contacts.pop("John")    # Another way
print(contacts)

# Popitem - removes the last key-value pair inserted (last item in the right if nothing is added)
contacts = {"Anny": "12345678", "John": "87654321", "Paul": "10293847"}
contacts["Dave"] = "11111111"
removed = contacts.popitem()
print("Removed: ", removed)
print(contacts)

# Update (similar with extend, but for dictionary)
contacts = {"Anny": "12345678", "John": "87654321", "Paul": "10293847"}
# Overwrites the original key-value pair if contain duplicates
contacts.update({"Mary": "77777777", "Andy": "12341234", "John": "88888888"})
print(contacts)

# clear - similar with lists

"""
Functions -> prevent any repeats (duplications), hide complexity, splits the code into several parts

Principle: DRY - Don't Repeat Yourself
"""

# Built-in functions -> available from Python itself
# e.g. print(), len(), sum(), range()

# Define (create) new functions
# NOTE: Make sure that your function names are descriptive


def greetings():
    print("Hello World!")
    print("Hi! How are you?")
    print("I am doing well right now and I hope that you are too.")
    print()


# Call/invoke function
greetings()

# Define functions with arguments


def greet_multiple_times(times, message):
    print(message)
    for i in range(times):
        greetings()


# Call with arguments
greet_multiple_times(1, "Greeting now...")  # Arguments are in order
# Arguments are ordered based on their argument names (named arguments)
greet_multiple_times(message="Greeting now...", times=1)


# Define functions with default arguments
def say_hi(times=3):
    for i in range(times):
        print("HI!")
    print()


say_hi()
say_hi(1)

# Define functions with regular and default arguments
# NOTE: define regular arguments first, then default arguments


def some_function(arg1, arg2, darg1="Hello", darg2="World"):
    print(arg1, arg2, darg1, darg2)


some_function(1, "CHANGED DARG1", darg2=2)

# pass statement -> to prevent errors caused by empty functions, for, while, if else elif statements


def idk():
    pass


print("Hello World")


# return statement -> returns value for later use, exits the function immediately
def average(ls):
    total = sum(ls)
    return total / len(ls)

ls = [1, 1, 1, 1]
ls_avg = average(ls)
print(ls_avg)