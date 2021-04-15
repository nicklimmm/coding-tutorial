"""
Outline:
1. Scopes and Namespaces
2. Functional and Object-Oriented Programming Paradigm
3. Classes, Objects, Methods
"""

"""
Namespace - works like 'dictionary' (key -> object names, value -> values of the object).
Scopes - the region of a program in which that name has meaning.
"""

# Scopes and namespaces

# Python searches variable from bottom to highest scope
mynum = 10
print(mynum)
x = 10

def f():
    # Doesn't modify the x in main
    x = 20

    def g():
        # Doesn't modify the x in f
        x = 40
        print('x:', x)

    g()
    print('x:', x)

f()
print('x:', x)


# Global
x = 20
def h():
    # Affects x
    global x
    x = 40

    def i():
        # Doesn't affect x
        x = 60
    
    i()
    print(x)

h()
print(x)


# Functional Programming Paradigm -> given the same input, the function will always return the same output.
#                                 -> the function doesn't modify the argument that is passed.
#                                 -> do well in programs that rely heavily on operations

# Example of modifying the argument after a function is called
# NOT FUNCTIONAL PROGRAMMING
ls = [1, 2, 3]

def convert(ls):
    ls.append(10)

convert(ls)
print(ls)

# FUNCTIONAL PROGRAMMING
def add(a, b):
    return a + b


# Object-Oriented Programming -> objects, methods and the relationship between objects
#                             -> do well in programs that rely heavily on states/information,
#                                interaction between objects.

"""
4 Pillars of OOP:
1. Encapsulation - states/information are kept safe from external sources.
2. Abstraction - hides the actual implementation.
3. Inheritance - prevents reinventing the wheel, passed on to others.
4. Polymorphism - takes many forms according to the context.
"""


# Class
class Human:
    # Class attributes
    population = 0

    # Constructor
    def __init__(self, name, age, pob):
        # These are object attributes
        self.name = name
        self.age = age
        self.pob = pob
        self.is_hungry = False

        # We can update the class attr
        Human.population += 1
    
    # Methods
    def birthday(self):
        self.age += 1

    def eat(self):
        if self.is_hungry:
            self.is_hungry = False
            print('I ate something!')
        else:
            print('I am still full!')

    def eat_together(self, friend):
        if self.is_hungry and friend.is_hungry:
            self.is_hungry = False
            friend.is_hungry = False
            print(f'I and {friend.name} ate together!')

        elif self.is_hungry:
            print(f'{friend.name} is full, try again next time.')

        elif friend.is_hungry:
            print('I am full!')

        else:
            print('You are both full!')
    
    def work(self):
        if self.is_hungry:
            print('I need to eat before work!')
        else:
            self.is_hungry = True
            print('I have worked hard today!')

# Object instantiation
john = Human('John', 18, 'Jakarta')
# Access object attribute
print(john.age)

alice = Human('Alice', 20, 'Bandung')
print(alice.name)

peter = Human('Peter', 25, 'Surabaya')
print(peter.pob)

# Calling object methods
alice.birthday()
print(alice.age)

peter.work()
alice.work()

# Interaction between objects
alice.eat_together(peter)
peter.eat()

# Belong to the same class, hence having the same class attr val
print(Human.population)
print(john.population)
print(alice.population)


# Another example
class Coordinate2D:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def distance(self, point2):
        return ((self.x - point2.x) ** 2 + (self.y - point2.y) ** 2) ** 0.5

    def add(self, point2):
        self.x += point2.x
        self.y += point2.y
    
p1 = Coordinate2D(1, 2)
p2 = Coordinate2D(1, 2)

p1.add(p2)

print(p1.x, p1.y)


"""
Task: 
Create a Rectangle class, with object attributes:
    1. length
    2. width
and with methods:
    1. get_area(self)
    2. get_perimeter(self)
    3. get_diagonal(self)
    4. is_larger(self, rect2) - returns a Boolean, compares areas
"""