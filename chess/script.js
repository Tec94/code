class Table {
    constructor(turn, select_piece) {
        this.turn = turn;
        this.select_piece = select_piece;
    }

    track_turn() {
        // if this.turn is even - black moves
        // if this.turn is odd - white moves
    }

    selected_piece() {
        // check for the image in the table cell, might add another function of this in cell
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
        this.clicked = true;
        
        last_square = this.location;
        last_color = this.color;

        this.table_cell.style.padding = '28px';
        this.table_cell.style.outlineColor = 'rgb(0, 170, 255)';
    }

    unhighlight() {
        this.table_cell = document.getElementById(last_square);
        this.table_cell.style.outlineColor = last_color;

        this.table_cell = document.getElementById(this.location);

        this.clicked = false;
        global_clicked = false;

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
turn = 'white';
turn_counter = 1;

const letter = ['a','b','c','d','e','f','g','h'];
const num = [1,2,3,4,5,6,7,8];
const cell_objects = [[],[],[],[],[],[],[],[]];

for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
        var loc = letter[x] + num[y];
        var color = '';

        // check if x%2 = 0 and y%2 = 0 then assign to color
        if (x%2==1 && y%2==1) {color = 'black'};
        if (x%2==0 && y%2==0) {color = 'black'};
        if (x%2==1 && y%2==0) {color = 'white'};
        if (x%2==0 && y%2==1) {color = 'white'};

        // creates a new Cell object for every cell
        cell_objects[x][y] = new Cell(loc, color);

        document.getElementById(loc).addEventListener('click', function() {
            cell_objects[x][y].select()
        }, false);
    }
}
