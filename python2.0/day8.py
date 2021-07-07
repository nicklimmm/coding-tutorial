"""
Scopes - the region of a program in which that name is defined
Namespaces - variables that is defined in a specific scope (works like dictionary)

Works from smallest to largest scope
"""

x = 10


def change_x():
    x = 5   # This doesn't modify the global variable x


print(x)
change_x()
print(x)


# mynum = 10


def print_modified_mynum():
    mynum = 20
    print(mynum)


print_modified_mynum()
print(mynum)    # mynum is not defined in global namespace


num1 = 1


def func1():
    num2 = 2

    def func2():
        num3 = 3
        print(num2)

    func2()
    print(num3)


func1()


myname = "John"


def change_name(new_name):
    # Global keyword - to access to global variable (modify, read)
    # NOTE: It is not a good practice to use globals as it disrupts namespace isolation
    global myname
    myname = new_name


change_name("Dave")
print(myname)

num1 = 5


def f1():
    num1 = 10

    def change_num1():
        # nonlocal num1
        global num1
        num1 = 20

    change_num1()
    print(num1)


f1()
print(num1)
