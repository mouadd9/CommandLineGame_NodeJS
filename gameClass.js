class Field {
    constructor(fieldArray) {
        this.field = fieldArray;
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


}

module.exports = Field;