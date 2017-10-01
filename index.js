const express = require('express');
const path = require('path');
const generatePassword = require('password-generator');
const socketIO = require('socket.io');
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

const app = express();

// Server static files from React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put API endpoints under /API
app.get('/api/passwords', function(req, res) {
  const count = 5;

  const passwords = Array.from(Array(count).keys()).map(i => generatePassword(12, false));

  res.json(passwords);

  console.log(`Sent ${count} passwords`);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
  //res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

const server = app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Password generator listening on ${port}`);
  }
});

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.emit('sendPasswords', Array.from(Array(5).keys()).map(i => generatePassword(12, false)));

  setInterval(() => {
    socket.emit('sendPasswords', Array.from(Array(5).keys()).map(i => generatePassword(12, false)));
    console.log('Sent Passwords');
  }, 3000);

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});
