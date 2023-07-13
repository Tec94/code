import random
def k_beauty(num, k):
    num = str(num)
    count = 0
    for i in range(len(num)):
        if int(num[i:i+k]) % int(num) == 0:
            count += 1
    return count

for i in range(20):
    num = random.randint(1, 1000)
    k = random.randint(1, 10)
    print(k_beauty(num, k))