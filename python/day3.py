"""
Outline: 
1. while loop
2. Higher Lower Game
"""

"""
for loop -> specified number of iterations (generally)
while loop -> unspecified number of iterations, i.e. must meet a certain condition
"""

# while loop
mynum = 1
while mynum < 10:
    print(mynum)
    mynum += 1

# To stop infinite loop, use Ctrl + C in terminal or Ctrl + Alt + M
total = 0
i = 1
while True:
    i *= 2
    total += i
    if total > 10000:
        break
    print(total)
print('Stopped at', total)


# Higher Lower Game

"""
Gameflow:
1. Computer starts with a number, then the user has to guess the number.
2. If the guess is the same as the target number, the computer will print 'Congrats!' and the game ends.
3. If the guess is higher than the target number, the computer will print 'Lower!'
4. If the guess is lower than the target number, the computer will print 'Higher!'
5. Repeat guessing until the user gets it. 
"""

target_number = 50
while True:
    guess = int(input('Enter your guess: '))
    if guess < target_number:
        print('Higher!')
    elif guess > target_number:
        print('Lower!')
    else:
        print('Congrats!')
        break

"""
Task: Given a number n, print all the even numbers starting from 2
      such that the sum of those numbers does not exceed n.
Hint: Use input(), so that the number n is set by the user.

Example: 
n = 10

Expected Output:
2
4

Explanation:
2 + 4 <= 10

Example:
n = 12

Expected Output:
2
4
6

2 + 4 + 6 <= 12
"""