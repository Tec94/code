from numpy import random
import numpy as np

#define matrix size
size = 2

arr1 = list(range(1, size * size))
arr2 = []

#build the matrix
for x in range(1, size * size):
	value = random.choice(arr1)
	arr1.remove(value)
	arr2.append(value)
arr2.append(0)

#print the matrix
for y in range(0, size):
	for z in range(0, size):
		print(str(arr2[size*y + z]).zfill(2), end =" ")
	print()