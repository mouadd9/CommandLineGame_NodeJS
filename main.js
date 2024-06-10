const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Which way? '
});

const Field = require('./gameClass.js');

let field2 = new Field(
    [
        ['*', '░', 'O', '░', 'O', '░', 'O', '░', '░', 'O', '░', 'O', '░', 'O', '░', 'O', '░', 'O', '░', '░'],
        ['░', '░', '░', 'O', '░', 'O', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', 'O', '░', '░', '░'],
        ['O', 'O', '░', '░', '░', '░', '░', 'O', '░', '░', '░', 'O', '░', 'O', '░', '░', '░', '░', 'O', '░'],
        ['░', '░', '░', 'O', 'O', 'O', '░', 'O', '░', '░', '░', '░', 'O', '░', '░', 'O', '░', '░', '░', 'O'],
        ['░', 'O', '░', '░', '░', '░', 'O', '░', '░', '░', 'O', '░', '░', '░', '░', '░', '░', '░', '░', '░'],
        ['░', '░', '░', '░', 'O', '░', '░', '░', 'O', '░', '░', '░', '░', 'O', '░', '░', '░', 'O', '░', '░'],
        ['░', 'O', 'O', '░', '░', '░', 'O', '░', '░', '░', '░', '░', '░', '░', 'O', '░', '░', '░', '░', '░'],
        ['░', '░', '░', '░', '░', 'O', '░', '░', '░', '░', '░', '░', 'O', '░', '░', '░', 'O', '░', '░', 'O'],
        ['O', '░', 'O', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', 'O', '░', '░', '░'],
        ['░', '░', '░', '░', 'O', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', 'O', '░'],
        ['░', '░', '░', 'O', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', 'O', '░', '░'],
        ['O', 'O', '░', '░', '░', 'O', '░', '░', '░', 'O', '░', 'O', '░', '░', '░', 'O', '░', '░', '░', '░'],
        ['░', '░', '░', '░', 'O', '░', '░', '░', '░', '░', '░', '░', '░', 'O', '░', '░', '░', '░', '░', 'O'],
        ['░', '░', '░', 'O', '░', '░', '░', 'O', '░', '░', '░', '░', '░', '░', '░', 'O', '░', '░', '░', '░'],
        ['░', '^', '░', '░', 'O', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░']
    ]

);




field2.print2();
rl.prompt();
rl.on('line', (data) => {
    let status;
    let input = data.toString().trim();
    switch (input) {
        case 'r':
            status = field2.moveRight();
            break;
        case 'l':
            status = field2.moveLeft();
            break;
        case 'u':
            status = field2.moveUp();

            break;
        case 'd':
            status = field2.moveDown();

            break;

        case 'exit':
            console.log("Exiting...");
            rl.close();
            return;

        default:
            break;
    }
    if (status === 0) {
        console.log("You lost...");
        rl.close();
        return;
    }
    else if (status === 1) {
        console.log("Champion!!!!!");
        rl.close();
        return;
    } else if (status === 4) {
        console.log("Out of the field !!!!!");
        rl.close();
        return;
    }
    field2.print2();
    rl.prompt();
});




