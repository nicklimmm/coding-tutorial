"""
Feedback: 7.5/10, can try with another ideas (random, with lives)
Tips:
- Prevent unnecessary elif statements
- Use try except statements (error handling)
"""
target_number = 1000

while True:
    user_guess = int(input(" 50 x 20 = "))
    if user_guess == target_number:
        print('Selamat anda benar!')
        print('Terima kasih sudah bermain')
        break
    else:
        print('Salah!')
        print('coba lagi lebih kecil!')
    # elif user_guess > target_number:
    #     print('Salah!')
    #     print('coba lagi lebih kecil!')
    # else:
    #     print('Salah!')
    #     print('coba lagi lebih besar!')
