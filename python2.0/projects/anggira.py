"""
Feedback: 7.5/10, can try with more complex situations (random, with lives)
Tips:
- Prevent unnecessary elif statements
"""

target_number = 100
try:
    while True:
        user_guess = int(input("50 x 2: "))
        if user_guess == target_number:
            print('Congrats! You win!')
            break
        else:
            print('Wrong pls try again')
        # elif user_guess > target_number:
        #     print('Wrong pls try again')
        # else:
        #     print('wrong pls try again')
except:
    print("Error")
