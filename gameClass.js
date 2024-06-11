class Field {
    constructor(field) {
        this.field = field;
        this.rowLocation = 0;
        this.columnLocation = 0;

    }
    print1() {
        let array = this.field;
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                process.stdout.write(array[i][j]);
            }
            process.stdout.write("\n");
        }

    }
    print2() {
        let array = this.field;
        //join() applies to an array it return a string of all the elements joined 
        array.forEach(element => {
            process.stdout.write(element.join(''));
            process.stdout.write('\n');
        })
    }
    moveRight() {
        let row = this.rowLocation;
        let column = this.columnLocation;
        if (this.field[row][column + 1] === '░' || this.field[row][column + 1] === '*') {
            this.columnLocation++;
            this.field[row][this.columnLocation] = '*';
            return 3;
        }
        else if (this.field[row][column + 1] === 'O') {
            return 0;

        }
        else if (this.field[row][column + 1] === '^') {
            return 1;
        } else {
            return 4;
        }
    }
    moveDown() {
        let row = this.rowLocation;
        let column = this.columnLocation;

        if (this.field[row + 1][column] === '░' || this.field[row + 1][column] === '*') {
            this.rowLocation++;
            this.field[this.rowLocation][column] = '*';
            return 3;
        }
        else if (this.field[row + 1][column] === 'O') {
            return 0;

        }
        else if (this.field[row + 1][column] === '^') {
            return 1;
        } else {
            return 4;
        }


    }
    moveUp() {
        let row = this.rowLocation;
        let column = this.columnLocation;
        if (this.field[row - 1][column] === '░' || this.field[row - 1][column] === '*') {
            this.rowLocation--;
            this.field[this.rowLocation][column] = '*'
            return 3;
        } else if (this.field[row - 1][column] === 'O') {
            return 0;

        }
        else if (this.field[row - 1][column] === '^') {
            return 1;
        } else {
            return 4;
        }

    }
    moveLeft() {
        let row = this.rowLocation;
        let column = this.columnLocation;
        if (this.field[row][column - 1] === '░' || this.field[row][column - 1] === '*') {
            this.columnLocation--;
            this.field[row][this.columnLocation] = '*'
            return 3;
        } else if (this.field[row][column - 1] === 'O') {
            return 0;

        }
        else if (this.field[row][column - 1] === '^') {
            return 1;
        } else {
            return 4;
        }

    }
    static generateField(height, width) {


        let elements = ['░', 'O'];

        let field = [];

        let firstRow = [];
        for (let j = 0; j < width; j++) {
            firstRow.push(elements[Math.floor(Math.random() * elements.length)]);
        }
        firstRow[0] = '*';

        field.push(firstRow);

        for (let i = 1; i < height; i++) {
            let row = [];
            for (let j = 0; j < width; j++) {
                let element = elements[Math.floor(Math.random() * elements.length)];
                row.push(element);
            }
            field.push(row);
        }

        let lastRowIndex = height - 1;
        let randomIndex = Math.floor(Math.random() * width);
        field[lastRowIndex][randomIndex] = '^'; 

        return field;
    }


}

module.exports = Field;