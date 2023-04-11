def primeFactorize(n):
    ans = []
    p = 2
    
    while n > 1:
        if n % p == 0:
            ans.append(p)
            n /= p
        else:
            p += 1

    return ans

print('prime factors: ', primeFactorize(30))