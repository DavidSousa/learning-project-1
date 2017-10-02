const socketIO = require('socket.io');
const generatePassword = require('password-generator');

module.exports.listen = (server) => {

    const io = socketIO(server);

    io.on('connection', (socket) => {
      console.log('Client connected');

      socket.emit('sendPasswords', Array.from(Array(5).keys()).map(i => generatePassword(12, false)));

      setInterval(() => {
        socket.emit('sendPasswords', Array.from(Array(5).keys()).map(i => generatePassword(12, false)));
        //console.log('Sent Passwords');
      }, 3000);

      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });
    });
}
