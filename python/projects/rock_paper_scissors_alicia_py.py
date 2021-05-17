"""
Feedback:
- Overall good
- Imports should be in the top of the file
- If immutable, use tuples
- Use literal strings instead of list indexing for readability
- Handle inputs with capital letter (use lower or upper)
- Straight forward variable names
"""

print('rock, paper or scissors?')
rpslist= ['rock','paper', 'scissors']

while True:
  player = str(input('enter move:'))
  import random
  computer = random.choice(rpslist)

  print(player)
  print('vs')
  print(computer)

  rpslist= ['rock','paper', 'scissors']
  if player == computer:
    print('its a draw!')

  elif player == rpslist[0]:
    if computer == rpslist[1]:
      print('you lose! try again next time ! ') 

  elif player == rpslist[1]:
    if computer == rpslist[0]:
      print('you won! congratulations!')

  elif player == rpslist[2]:
    if computer == rpslist[0]:
      print('you lose! try again next time !')

  rpslist = ['rock','paper','scissors']
  if player == rpslist[0]:
    if computer == rpslist[2]:
        print('you won! congratulations!')

  elif player == rpslist[1]:
    if computer == rpslist[2]:
      print('you lose! try again next time !')

  elif player == rpslist[2]:
    if computer == rpslist[1]:
      print('you won! congratulations!')
  
  x = input(' do you want to play again? [yes or no]:')
  if x != 'yes':
    break