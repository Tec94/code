export function bishopLogic(starting, destination,destCell) {
    // Check if the starting and destination cells are on the same diagonal
    if (Math.abs(starting[0] - destination[0]) !== Math.abs(starting[1] - destination[1])) {
        return false;
    }

    // Check if there are any pieces blocking the way
    let xDiff = destination[0] - starting[0];
    let yDiff = destination[1] - starting[1];
    let xDir = xDiff > 0 ? 1 : -1;
    let yDir = yDiff > 0 ? 1 : -1;
    let x = starting[0] + xDir;
    let y = starting[1] + yDir;
    while (x !== destination[0] && y !== destination[1]) {
        // Check if the cell is empty by checking the 'src' attribute
        if (destCell.getAttribute('src') != '') {
            return false;
        }
        x += xDir;
        y += yDir;
    }

    return true;
}