# -*- coding: utf-8 -*-
"""WW2 Quiz - Russell

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1WvnHC4YiWgQgrPpurtZbzwNbo01ka_7T
"""

"""
Feedback:
- Overall its great, educational
- Create new line after each question for readability
- Minor errors
- DRY (Don't Repeat Yourself), create functions
"""

"""
Function suggestion:

def question(prompt, correct_ans, wrong_message):
    ans = input (prompt)
    if ans == correct_ans:
        print('You are correct!')
        return 1
    else:
        print('You are incorrect!')
        printwrong_message)
        return 0

In actual code:
    score += question('1.On what year did WW2 ended?', '1945', 'WW2 ended on the year 1945')
"""

print('Hello there! Welcome to my WW2 Mini Quiz')
ans = input('Shall we begin the Quiz? (Yes/No)')
score = 0
if ans.lower() == 'yes':
# If you answered yes, then the quiz would begin. Input the right answer to get a score!
  ans = input ('1.On what year did WW2 ended?')
  if ans == '1945':
    score+= 1
    print('You are correct!')
  else:
    print('You are incorrect!')
    print('WW2 ended on the year 1945')

  ans = input ('2.Which country did the Nazis invaded first?')
  if ans.lower()== 'poland':
    score+= 1
    print('You are correct!')
  else:
    print('You are incorrect!')
    print('The Nazis invaded Poland first, which started WW2')

  
  ans = input ('3.On which city was the nuclear bomb "Fat Man" dropped on?')
  if ans.lower()== 'nagasaki':
    score+= 1
    print('You are correct!')
  else:
    print('You are incorrect!')
    print('"Fat Man" was dropped on the city of Nagasaki on 9 August 1945 by America')

  ans = input ('4. In order to pass the Maginot Line, what country did the Nazis passed through?')
  if ans.lower()== 'belgium':
    score+= 1
    print('You are correct!')
  else:
    print('You are incorrect!')
    print('The Maginot Line was not extended until the borders of Belgium.')

  ans = input ('5. What is the most famous extermination camp in Poland?')
  if ans.lower()== 'auschwitz':
    score+= 1
    print('You are correct!')
  else:
    print('You are incorrect!')
    print('Auschwitz was famous for its gas chamber execution.')

  ans = input ('6. Which country pressured the European Axis Power from the East?')
  if ans.lower()== 'ussr':
    score+= 1
    print('You are correct!')
  else:
    print('You are incorrect!')
    print('By the end of WW2, the USSR have pressured the European Axis Power from the East')

  ans = input ('7. On what month was Pearl Harbour attacked?')
  if ans.lower()== 'december':
    score+= 1
    print('You are correct!')
  else:
    print('You are incorrect!')
    print('The Japanese Forces attacked Pearl Harbour on the 4th of December, 1941')

  ans = input ('7. Which beach was the bloodiest during D-Day?')
  if ans.lower()== 'omaha':
    score+= 1
    print('You are correct!')
  else:
    print('You are incorrect!')
    print('Omaha Beach was the bloodiest of them all. It was possibly one of the hardest beach to take over during the Invasion of Normandy')
# By the end of the quiz, you'd be redirected into the results tab, on how many questions you got correct.
  print('Here are the results, you got ',score, 'questions correct,')
# This will be the end of the quiz. If you answered anything besides yes, it would instantly end the game.
print('That is the end of the WW2 Quiz. Thanks for playing!')

