let hasMovedKing = false; // king

import { pawnLogic } from "./components/pawn.js";
import { rookLogic } from "./components/rook.js";
import { knightLogic } from "./components/knight.js";
import { bishopLogic } from "./components/bishop.js"

export function kingLogic(starting, destination, kingLoc, qhasMovedRookBL, hasMovedRookBR, hasMovedRookWL, hasMovedRookWR) {
    let a = moveLogic(starting, destination);
    let b = castlingLogic();
    let c = NotInCheck();

    if (!a) {return b, c;}
    else {return a, c;}
}
function moveLogic(starting, destination, kingLoc) {
    // check if move is within 1 square in any direction
    if (Math.abs(starting[0] - starting[1]) <= 1 && Math.abs(destination[0] - destination[1]) <= 1) {
        kingLoc = destination;
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
            if (!hasMovedRookWL) {
                kingLoc = destination;
                return true;
            }
        } else if ((y1 < y2) && (x1 == 7)) { // white king moved right
            if (!hasMovedRookWR) {
                kingLoc = destination;
                return true;
            }
        } else if ((y1 > y2) && (x1 == 0)) { // black king moved left
            if (!hasMovedRookBL) {
                kingLoc = destination;
                return true;
            }
        } else if ((y1 < y2) && (x1 == 0)) { // black king moved right
            if (!hasMovedRookBR) {
                kingLoc = destination;
                return true;
            }
        }
    }
}
function NotInCheck() {
    
}