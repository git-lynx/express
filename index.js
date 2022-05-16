const net = require('net');
const stream = require('stream');
let field = [' ', ' ', ' ',' ', ' ', ' ',' ', ' ', ' ',]

function printField(array) {
    let result = ''
    for (let i = 0 ; i < field.length ; i++) {
        if (i === 0) {
            result += ' ' + field[i];
        } else if (i % 3 === 0) {
            result += ' \n ---+---+--- \n ' + field[i];
        } else {
            result += ' | ' + field[i];
        }
    }
    console.log(result);
    }
    
    function checkField(board, currentPlayer) {
        if(
        (board[0] === currentPlayer && board[1] === currentPlayer && board[2] === currentPlayer) ||
        (board[3] === currentPlayer && board[4] === currentPlayer && board[5] === currentPlayer) ||
        (board[6] === currentPlayer && board[7] === currentPlayer && board[8] === currentPlayer) ||
        (board[0] === currentPlayer && board[3] === currentPlayer && board[6] === currentPlayer) ||
        (board[1] === currentPlayer && board[4] === currentPlayer && board[7] === currentPlayer) ||
        (board[2] === currentPlayer && board[5] === currentPlayer && board[8] === currentPlayer) ||
        (board[0] === currentPlayer && board[4] === currentPlayer && board[8] === currentPlayer) ||
        (board[2] === currentPlayer && board[4] === currentPlayer && board[6] === currentPlayer)) {
            return true
        } else {
            return false
        }
    }















    





// функция вызываеться во время подключения клиента к серверу
const server = net.createServer(function(socket) {

})

server.listen(1337, '127.0.0.1');





















class ToUpperCaseTransform extends stream.Transform {
    constructor() {
        super()
    }

    _transform(chunk, enc, done) {
        this.push(chunk.toString().toUpperCase())
        done();
    }
}

function printField(array) {
let result = ''
for (let i = 0 ; i < field.length ; i++) {
    if (i === 0) {
        result += ' ' + field[i]
    } else if (i % 3 === 0) {
        result += ' \n---+---+---\n ' + field[i]
    } else {
        result += ' | ' + field[i]
    }
}
console.log(result);
}

// function checkField(board, currentPlayer) {
//     if(
//     (board[0] === currentPlayer && board[1] === currentPlayer && board[2] === currentPlayer) ||
//     (board[3] === currentPlayer && board[4] === currentPlayer && board[5] === currentPlayer) ||
//     (board[6] === currentPlayer && board[7] === currentPlayer && board[8] === currentPlayer) ||
//     (board[0] === currentPlayer && board[3] === currentPlayer && board[6] === currentPlayer) ||
//     (board[1] === currentPlayer && board[4] === currentPlayer && board[7] === currentPlayer) ||
//     (board[2] === currentPlayer && board[5] === currentPlayer && board[8] === currentPlayer) ||
//     (board[0] === currentPlayer && board[4] === currentPlayer && board[8] === currentPlayer) ||
//     (board[2] === currentPlayer && board[4] === currentPlayer && board[6] === currentPlayer)) {
//         return true
//     } else {
//         return false
//     }
// }