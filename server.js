const net = require('net');
const stream = require('stream');

// функция вызываеться во время подключения клиента к серверу
const server = net.createServer(socket => {
    // функция выводит информацию о нашем клиенте
    const clientInfo = `${socket.remoteAddress}:${socket.remotePort}`;
    console.log(`+ ${clientInfo} - connected`);

    socket.write('Echo server\r\n');
    socket
        .pipe(new ToUpperCaseTransform()) // convert client messages to upper case
        .pipe(socket); // forwards uppercased text back to client

    // каждый раз когда получаем данные от клиента 
    socket.on('data', message => {
        process.stdout.write(`> ${clientInfo} : ${message}`);
    })
    
    // фунция выводит информацию когда клиент отключается 
    socket.on('close', () => {
        console.log(`- ${clientInfo} - closed`)
    })
});

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