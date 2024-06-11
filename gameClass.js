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
    static generateField = (height, width) => {
        let elements = ['░', 'O'];  // Open and obstacle elements.
        let field = [];
        let tries = 0;  // To prevent infinite loops in unsolvable maze configurations.
        let lastRowIndex ;
        let randomIndex;
    
        // Function to check if the path from start to end is clear.
        function isSolvable(field, start, end) {
            let queue = [start];
            let visited = new Array(height).fill(false).map(() => new Array(width).fill(false));
            visited[start[0]][start[1]] = true;
    
            while (queue.length > 0) {
                let [x, y] = queue.shift();
    
                // Directions: right, left, down, up
                const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
                for (let [dx, dy] of directions) {
                    let nx = x + dx, ny = y + dy;
                    if (nx >= 0 && nx < height && ny >= 0 && ny < width && !visited[nx][ny] && field[nx][ny] !== 'O') {
                        if (nx === end[0] && ny === end[1]) return true;
                        queue.push([nx, ny]);
                        visited[nx][ny] = true;
                    }
                }
            }
            return false;
        }
    
        do {
            field = [];
    
            // First row with random elements, ensuring the first element is '*'.
            let firstRow = [];
            for (let j = 0; j < width; j++) {
                firstRow.push(elements[Math.floor(Math.random() * elements.length)]);
            }
            firstRow[0] = '*'; // Start position
            field.push(firstRow);
    
            // Fill the remaining rows with random elements.
            for (let i = 1; i < height; i++) {
                let row = [];
                for (let j = 0; j < width; j++) {
                    let element = elements[Math.floor(Math.random() * elements.length)];
                    row.push(element);
                }
                field.push(row);
            }
    
            // Set one random position in the last row to '^'
             lastRowIndex = height - 1;
             randomIndex = Math.floor(Math.random() * width);
            field[lastRowIndex][randomIndex] = '^';
    
            tries++;
        } while (!isSolvable(field, [0, 0], [lastRowIndex, randomIndex]) && tries < 100);
    
        return field;
    } 


}

module.exports = Field;