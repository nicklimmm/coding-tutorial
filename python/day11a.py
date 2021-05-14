"""
Outline:
1. Manual vs Automated Testing
2. Python Testing (using assert and unittest)
3. Destructuring
4. args and kwargs
"""

"""
Testing - to ensure software quality, checking for bugs or improvements

Manual vs Automated

Common asserts:
- equal
- true
- false
- almost equal (usually for floating point numbers)
- greater / less
- greater / less equal
- etc.
"""

def multiply_by_three(num):
    return num * 2

# Assert syntax: assert [boolean], [error message]
assert multiply_by_three(7) == 21, "Should be 21"

import unittest

every_item_floor_divide_by_two = lambda ls: list(map(lambda item: item // 2, ls))

class TestMyFunction(unittest.TestCase):
    def test_all_even(self):
        self.assertEqual(every_item_floor_divide_by_two([2, 4, 6, 8]), [1, 2, 3, 4], "Failed for all even")
    
    def test_all_odd(self):
        self.assertEqual(every_item_floor_divide_by_two([1, 3, 5, 7]), [0, 1, 2, 3], "Failed for all odd")

    def test_mixed(self):
        self.assertEqual(every_item_floor_divide_by_two([1, 2, 3, 4]), [0, 1, 1, 2], "Failed for mixed")

unittest.main()

# Destructuring
ls = [1, 2, 3, 4]
a, b, c, d = ls

print(a, b, c, d)

# Only 1 starred expressions allowed
a, b, *c = ls
print(a, b, c)

a, *b, c = ls
print(a, b, c)


# Only takes the keys
dt = {"one": 1, "two": 2, "three": 3, "four": 4}
a, b, c, d = dt
print(a, b, c, d)

ls = [20, "Mary", 28]
employee_id, _, employee_age = ls


"""
args - arguments (only values)
kwargs - keyword arguments (key-value pairs)

Useful for variable-number of arguments
"""

# args
def average(*numbers):
    return sum(numbers) / len(numbers)

# Works for any number of arguments
print(average(1, 2))
print(average(1, 2, 3, 4))


# kwargs
def info(**emp):
    print("MY INFO:")
    for k, v in emp.items():
        print(f"{k}: {v}")
    print()

info(name="John", age="21", salary="$5000")
info(name="Sid", age="25", salary="$7000", position="CEO")

"""
Order of function arguments:
1. default arg
2. args
3. kwargs
"""

def func(a, b, *args, **kwargs):
    print(a, b, args, kwargs)

func(1, 2, 5, 6, 1, 57, 2, 3, name="John", age='30')


# Default value for functions
def greetings(name, message="Hello" ):
    print(message + " " + name)

greetings("John")
greetings("John", "HIIIIIIIIII!")
greetings("John", message="ZZZZZZZZZZZZZZZZZZZZZz!")