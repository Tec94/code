# declare a 5x5 array
array = [[ 1, 2, 3, 4, 5],
         [ 6, 7, 8, 9,10],
         [11,12,13,14,15],
         [16,17,18,19,20],
         [21,22,23,24,25]]
# declare a 4x4 array
array = [[ 1, 2, 3, 4],
         [ 5, 6, 7, 8],
         [ 9,10,11,12],
         [13,14,15,16]]

def snail(snail_map):
    ans = []
    while len(snail_map)-1 > 0:
        for x in snail_map[0]: {ans.append(x)}
        snail_map.pop(0)
        for x in range(len(snail_map)): 
            ans.append(snail_map[x][len(snail_map[x])-1])
            snail_map[x].pop(len(snail_map[x])-1)
        for x in snail_map[len(snail_map[0])-1][::-1]:
            ans.append(x)
        snail_map.pop(len(snail_map[0])-1)
        for x in snail_map[::-1]:
            ans.append(x[0])
        for x in range(len(snail_map)):
            snail_map[x].pop(0)
    if len(snail_map) == 1:
        for x in snail_map[0]: {ans.append(x)}
    
    
snail(array)

from collections import Counter
mylist = [20, 30, 25, 20]
[k for k,v in Counter(mylist).items() if v>1]
print(k)