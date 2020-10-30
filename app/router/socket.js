function socket(http) {
    const io = require('socket.io')(http);
    io.on('connection', (socket) => {
        console.log('a user connected');
        socket.on('chat message', (msg) => {



            io.emit('chat message', msg);
        })
        socket.on('disconnect', () => {
            console.log('user disconnected')
        })

    });
}

module.exports = socket




