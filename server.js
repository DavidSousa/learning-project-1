const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const io = require('./server/sockets');
const api = require('./server/api');
const database = require('./server/database');

const port = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', api);

const server = app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Password generator listening on ${port}`);
  }
});

io.listen(server);

// Server static files from React app
// app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
/*
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
  //res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});
*/
