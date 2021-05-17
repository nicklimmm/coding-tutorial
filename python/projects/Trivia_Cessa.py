"""
Feedback:
- Overall good
- Variable names should start with lowercase
- Should be able to accept True, fAlse, etc.
- Lacking call-to-action in the start
- DRY, use functions instead
"""

"""
Suggested function:
def question(prompt, true_message, false_message):
    answer = input(prompt)
    if answer == 'true' :
        print(true_message)
        break
    elif answer == 'false' :
        print(false_message)
        break
    else :
        print("You're suppose to answer true or false, try again!")
"""

Target = "hello"
while True:
    guess = str(input('Hewo!~ ᕙ(◍ °▽ °◍)ᕗ : '))
    if guess == Target:
        print("Hehee~ You greeted me back! (◍ •ᴗ•◍)❤")
        break
    else :
        print("You're supposed to say hello back to me! Let's try again!")

name = input("Say, what's your name? (◍ °o°◍)?? : " )
print(f"Oooo~ Cool name, {name}! Since, you have introduced yourself, it's my turn now! My name is Trivi, Nice to meet you {name}! (◍ °▽ °◍)/")

Target = "yes"
while True:
    guess = str(input('Say, wanna play a game? : '))
    if guess == Target:
        print("Yayy! Alright then let's play a game of trivia, I have to live up to my name you know. Get it? Trivi-a? ( ಡ ͜ ʖ ಡ )")
        break
    else :
        print("Aww, come on, pleaseee! Just one game, I promise. Say yes! Say yes! (◍ •⌢ •◍)")

while True:
    answer = input('Ok, first question, there are seven colors in a rainbow, true or false? (◍ °o°◍)?? : ')
    if answer == 'true' :
        print('Wow! you are correct! ✧◝(◍ ⁰▿⁰◍)◜✧')
        break
    elif answer == 'false' :
        print('Nopee, wrong answer!')
        break
    else :
        print("You're suppose to answer true or false, try again!")

while True:
    answer = input('Ok, second question, the largest continent is Europe, true or false? (◍ °o°◍)?? : ')
    if answer == 'false' :
        print("Wow! Correct! You're getting good at this! (◍ °▽ °◍)")
        break
    elif answer == 'true' :
        print('Nu-uh, wrong answer!')
        break
    else :
        print("You're suppose to answer true or false, try again!")

while True:
    answer = input('Ok, third question, Venus is the planet closest to the Sun, true or false? (◍ °o°◍)?? : ')
    if answer == 'false' :
        print("Hehee!~ Correct! The planet closest to the Sun is Mercury!")
        break
    elif answer == 'true' :
        print('Nahh, wrong answer! The planet closest to the Sun is Mercury!')
        break
    else :
        print("You're suppose to answer true or false, try again!")

while True:
    answer = input('Ok, fourth question, watch out, this is another science question, Mars is also known as the Red Planet, true or false? (◍ °o°◍)?? : ')
    if answer == 'true' :
        print("Yep, you're answer is correct! ✧◝(◍ ⁰▿⁰◍)◜✧ Wow, you must've really payed attention in science class!")
        break
    elif answer == 'false' :
        print('Annnnnd, your answer is incorrect! Pay better attention in science class next time!')
        break
    else :
        print("You're suppose to answer true or false, try again!")

while True:
    answer = input("Ok, fifth and last question, hehee this is gonna be a good one! Harry Potter's middle name is Janes, true or false? (◍ °o°◍)?? : ")
    if answer == 'false' :
        print("Whatt!? You even managed to get this one correct!? Yayy!~ Then that must mean you are another fellow Harry Potter fan! ◝(◍≧▽≦◍)◜~♪")
        break
    elif answer == 'true' :
        print("Nahh, wrong answer! Harry Potter's middle name is James!")
        break
    else :
        print("You're suppose to answer true or false, try again!")

print(f"Wow~ That was fun! Play again with me again later kay? See you later {name}! Baibai!~ (◍ °▽ °◍)/")