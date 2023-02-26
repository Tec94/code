export function bishopLogic(start, dest, destCell) {
    // Check if the start and dest cells are on the same diagonal
    if (Math.abs(start[0] - dest[0]) !== Math.abs(start[1] - dest[1])) {
        return false;
    }

    // Check if there are any pieces blocking the way
    let xDiff = dest[0] - start[0];
    let yDiff = dest[1] - start[1];
    let xDir = xDiff > 0 ? 1 : -1;
    let yDir = yDiff > 0 ? 1 : -1;
    let x = start[0] + xDir;
    let y = start[1] + yDir;
    while (x !== dest[0] && y !== dest[1]) {
        // Check if the cell is empty by checking the 'src' attribute
        if (destCell.getAttribute('src') != '') {
            return false;
        }
        x += xDir;
        y += yDir;
    }

    return true;
}