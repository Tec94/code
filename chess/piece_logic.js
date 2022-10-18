var horizontal = false;
var vertical = false;
var diagonal = false;
var LShape = false;
var distance = 0;
piece_logic = {
    'rook.png':{
        horizontal: true,
        vertical: true,
        distance: 7
    },
    'knight.png':{
        LShape: true,
        distance: 2
    },
    'bishop.png':{
        diagonal: true,
        distance: 7
    },
    'pawn.png':{
        vertical: true,
        distance: 2
    },
    'king.png':{
        horizontal: true,
        vertical: true,
        diagonal: true,
        distance: 1
    },
    'queen.png':{
        horizontal: true,
        vertical: true,
        diagonal: true,
        distance: 7
    }
}