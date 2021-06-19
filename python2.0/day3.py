"""
While loop - loops for unspecified amount of time (generally)

Syntax:
while (boolean/condition):
    ---code---

If encounter infinite loop, stop with Ctrl(or Command)+Alt+M
"""

todays_spending = 0
budget = 50000

while todays_spending + 3000 < budget:
    print("Bought a candy")
    todays_spending += 3000

print(todays_spending)

# While True loop
i = 0
while True:
    print(i)
    if i == 9:
        break
    i += 1


"""
Higher Lower Game

Gameflow:
1. Computer starts with a number, then the user has to guess the number (using input())
2. If the guess is the same as the target, then the computer will print 'Congrats! You win!' and the game ends
3. If the guess is higher than the target, then the computer will print 'Lower!'
4. If the guess is lower than the target, then the computer will print 'Higher!'
5. Repeat guessing until the user gets it
"""

target_number = 100

while True:
    user_guess = int(input("Enter your guess: "))
    if user_guess == target_number:
        print('Congrats! You win!')
        break
    elif user_guess > target_number:
        print('Lower!')
    else:
        print('Higher!')
