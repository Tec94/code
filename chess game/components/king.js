let hasMovedKing = false; // king

let kingLoc = [];

export function kingLogic(starting, destination, hasMovedRookBL, hasMovedRookBR, hasMovedRookWL, hasMovedRookWR) {
    let a = moveLogic(starting, destination);
    let b = castlingLogic();
    let c = checkLogic();

    if (!a) {return b, c;}
    else {return a, c;}
}
function moveLogic(starting, destination) {
    // check if move is within 1 square in any direction
    if (Math.abs(starting[0] - starting[1]) <= 1 && Math.abs(destination[0] - destination[1]) <= 1) {
        return true;
    } else {
        return false;
    }
}
function castlingLogic() {
    let x1 = starting[0], y1 = starting[1], x2 = destination[0], y2 = destination[1];
    if ((x1 == x2) && Math.abs((y2 - y1))==2 && !hasMovedKing) { // same row, moved 2 spaces away, king hasn't moved
        // check if rook on that side hasn't moved
        if ((y1 > y2) && (x1 == 7)) { // white king moved left
            if (!hasMovedRookWL) {return true;}
        } else if ((y1 < y2) && (x1 == 7)) { // white king moved right
            if (!hasMovedRookWR) {return true;}
        } else if ((y1 > y2) && (x1 == 0)) { // black king moved left
            if (!hasMovedRookBL) {return true;}
        } else if ((y1 < y2) && (x1 == 0)) { // black king moved right
            if (!hasMovedRookBR) {return true;}
        }
    }
}
function checkLogic() {
    if (moveLogic(starting, destination)) {
        kingLoc = destination;
    }
    
}