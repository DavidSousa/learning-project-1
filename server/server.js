const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');

const io = require('./socket/');
const router = require('./routes/index');
const authRouter = require('./routes/authentication');
const database = require('./database');
const passport = require('./auth');

const port = process.env.PORT || 5000;

const app = express();

// Body parser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());

// Log API requests using morgan
app.use(logger('dev'));

// Enable CORS from the client-side
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use('/', router);
app.use('/', authRouter);

// Server static files from React app
app.use(express.static(path.join(__dirname, 'client/build')));

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

io.listen(server);
