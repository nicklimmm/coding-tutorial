"""
Feedback: 8/10, can try to experiment with more complex games
Bugs:
- game_done is case sensitive (should tolerate different cases) -> use .lower() 
"""

try:
    while True:
        print("hint: I am an odd number. Take away one letter and I become even. What number am I?")
        target_number = 7
        exit_game = "no"
        user_guess = int(input("guess a number between -70 untill 50 :  "))

        if user_guess == target_number:
            print("congratulations your answer is correct!")
            break

        elif user_guess < target_number:
            print("your guess is incorrect!")
        else:
            print("your guess is incorrect!")
        game_done = input("do you want to try again? (yes/no): ")
        if game_done == exit_game:
            print("thankyou for playing, goodbye!")
            break

except ValueError:
    print("Error, please input a number only, or check your spelling!")
