def queenCapture(pos: tuple) -> bool:
    # diagonal
    if abs(pos[0][0] - pos[1][0]) == abs(pos[0][1] - pos[1][1]):
        return True

    # row / col
    elif (pos[0][0] == pos[1][0]) or (pos[0][1] == pos[1][1]):
        return True

    return False


position = [(2,2), (2,6)]
print(queenCapture(position))
print(queenCapture([(1, 1), (1, 4)]))
print(queenCapture([(2, 2), (4, 6)]))
print(queenCapture([(2, 2), (3, 6)]))
print(queenCapture([(1, 2), (2, 6)]))
print(queenCapture([(2, 3), (3, 5)]))