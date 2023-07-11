i = 5#int(input("matrix size: "))
obj_pos = ''
obj_val = ''

# position objects with a while loop that loops until i, append number to x and y objects
for j in range(1, i+1):
    obj_pos += ' x' + str(j)
    obj_pos += ' y' + str(j)

for j in range(1, (i**2)):
    obj_val += ' n' + str(j)

print(obj_pos)
print(obj_val)
