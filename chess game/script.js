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
        } else if ((turn_count % 2) == 1) { // if turn_count is odd - white moves
            turn = 'White';
            this.turn.style.opacity = 1;
            this.turn.innerHTML = turn;
        }

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

    moveImage() {
        chess_table = document.getElementById('chess-board');
        var row = starting[0], column = starting[1];
        var temp;
        var currentCell = chess_table.rows[row].cells[column];;
        var img = document.createElement("IMG"); // create the image
        var srcImg = currentCell.firstElementChild.getAttribute('src'); // get the src of starting cell
        img.setAttribute("src", srcImg); 

        if (temp) {
            currentCell.removeChild(currentCell.firstElementChild);
            currentCell.appendChild(temp);
        }

        temp = currentCell.firstElementChild;
        row = destination[0];
        column = destination[1];
        currentCell.removeChild(currentCell.firstElementChild); // remove image from starting cell
        currentCell = chess_table.rows[row].cells[column];
        currentCell.removeChild(currentCell.firstElementChild); // remove preexisting image from destination cell
        currentCell.appendChild(img);

    }

    select() { // manages click
        if (starting.length == 0) { // first click - move piece from
            starting[0] = this.table_cell.getAttribute('row');
            starting[1] = this.table_cell.getAttribute('column');

            starting[0] = starting[0]-1;
            starting[1] = starting[1]-1;
        } else if (destination.length == 0) {  // second click - move piece to
            destination[0] = this.table_cell.getAttribute('row');
            destination[1] = this.table_cell.getAttribute('column');

            destination[0] = destination[0]-1;
            destination[1] = destination[1]-1;
        }
        if (starting[0]==destination[0] && starting[1]==destination[1]) { // reset array if double-clicking the same cellb
            starting = [];
            destination = [];
        }
        if (starting.length != 0 && destination.length != 0) { // move img
            // run moveImage() here
            this.moveImage();

            turn_count += 1

            // reset arrays
            starting = [];
            destination = [];
        }
        
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

starting = [];
destination = [];

const letter = ['a','b','c','d','e','f','g','h'];
const num = [1,2,3,4,5,6,7,8];
const cell_objects = [[],[],[],[],[],[],[],[]];
var chess_table = document.getElementById('chess-board');

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
        table = new Table();

        document.getElementById(loc).addEventListener('click', function() {
            cell_objects[x][y].select()
            table.track_turn()
        }, false);
    }
}