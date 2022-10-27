class Table {
    constructor() {
        this.chess_table = document.getElementById('chess-board');
        this.turn = document.getElementById('turn-tracker');
    }

    track_turn() {
        if ((turn_count % 2) == 0) { // if turn_count is even - black moves
            turn = 'Black';
            this.turn.style.opacity = 1;
            this.turn.innerHTML = turn;
            console.log(this.turn.innerHTML);
        } else if ((turn_count % 2) == 1) { // if turn_count is odd - white moves
            turn = 'White';
            this.turn.style.opacity = 1;
            this.turn.innerHTML = turn;
            console.log(this.turn.innerHTML);
        }

    }

    selected_piece() {
        // check for the image in the table cell
        var fullPath = document.getElementById('b_rook').src;
        var fileName = fullPath.replace(/^.*[\\\/\_bw]/, '');
        console.log(fileName);
        
    }
}

class Cell {
    constructor(location, color) {
        this.location = location;
        this.color = color;
        this.clicked = false;
        this.table_cell = document.getElementById(location);
    }

    highlight() {
        global_clicked = true;
        turn_count += 1
        this.clicked = true;
        
        last_square = this.location;
        last_color = this.color;

        this.table_cell.style.padding = '1px';
        this.table_cell.style.outlineColor = 'rgb(0, 170, 255)';
    }

    unhighlight() {
        this.table_cell = document.getElementById(last_square);
        this.table_cell.style.outlineColor = last_color;

        this.table_cell = document.getElementById(this.location);

        this.clicked = false;
        global_clicked = false;

    }

    removeimg() {
        this.table_cell.removeChild();
    }

    select() { // manages click
        
        if (this.clicked==false && global_clicked==false) { // first click
            this.highlight();
        } else if (this.clicked==false && global_clicked==true) { // click on a square after clicking another one
            this.unhighlight();
            this.highlight();
        } else { // clicking on the same square twice
            this.unhighlight();
        }
    }
}

global_clicked = false;
last_square = "";
last_color = "";
turn = 'White';
turn_count = 1;

starting = "";
destination = "";

const letter = ['a','b','c','d','e','f','g','h'];
const num = [1,2,3,4,5,6,7,8];
const cell_objects = [[],[],[],[],[],[],[],[]];
var chess_table = document.getElementById('chess-board');

let a = 'test';

window.test=function() {
    
}

for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
        var loc = letter[x] + num[y];
        var color = '';

        // check if x%2 = 0 and y%2 = 0 then assign to color
        if (x%2==1 && y%2==1) {color = 'rgb(238, 238, 213)'};
        if (x%2==0 && y%2==0) {color = 'rgb(238, 238, 213)'};
        if (x%2==1 && y%2==0) {color = 'rgb(125, 148, 93)'};
        if (x%2==0 && y%2==1) {color = 'rgb(125, 148, 93)'};

        // creates a new Cell object for every cell
        cell_objects[x][y] = new Cell(loc, color);
        chess_table = new Table();

        document.getElementById(loc).addEventListener('click', function() {
            cell_objects[x][y].select()
            test()
            chess_table.track_turn()
        }, false);
    }
}