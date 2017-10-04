const socketIO = require('socket.io');
const generatePassword = require('password-generator');

const ioEvents = (io) => {
  //
  io.of('/passwords').on('connection', (socket) => {
    console.log('Client connected');

    socket.emit('sendPasswords', Array.from(Array(5).keys()).map(() => generatePassword(12, false)));

    setInterval(() => {
      socket.emit('sendPasswords', Array.from(Array(5).keys()).map(() => generatePassword(12, false)));
      // console.log('Sent Passwords');
    }, 3000);

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });

  io.of('/comments').on('connection', (socket) => {
    //
    socket.on('newMessage', (msg) => {
      socket.broadcast.emit('newMessage', msg);
    });
  });
};

module.exports.listen = (server) => {
  const io = socketIO(server);
  ioEvents(io);
};
